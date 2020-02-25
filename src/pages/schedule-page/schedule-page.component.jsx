import React from 'react'

import ScheduleToolbar from '@components/schedule-toolbar/schedule-toolbar.component'
import ScheduleTable from '@components/schedule-table/schedule-table.component'
import CUScheduleModal from '@components/cu-schedule-modal/cu-schedule-modal.component'

import ScheduleTableData from '@src/data/schedule'

class SchedulePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			startDate: new Date(),
			endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
			cUScheduleModalVisible: false,
			actionType: 'create',
			scheduleItem: {},
		}
	}

	onDateChange = ({
		startDate = this.state.startDate,
		endDate = this.state.endDate,
	}) => {
		this.setState({ startDate, endDate })
	}

	onToggleCUScheduleModal = () => {
		this.setState({
			cUScheduleModalVisible: !this.state.cUScheduleModalVisible,
		})
	}

	onChangeActionType = actionType => {
		this.setState({ actionType })
	}

	onOpenUpdateScheduleInfoModal = (id, date) => {
		const scheduleItem = ScheduleTableData[date].find(
			schedule => schedule.id === id
		)
		if (scheduleItem) {
			this.setState({ scheduleItem })
			this.onChangeActionType('update')
			this.onToggleCUScheduleModal()
		}
	}

	render() {
		const {
			startDate,
			endDate,
			cUScheduleModalVisible,
			actionType,
			scheduleItem,
		} = this.state
		return (
			<React.Fragment>
				<ScheduleToolbar
					startDate={startDate}
					endDate={endDate}
					onDateChange={this.onDateChange}
					toggleCUScheduleModal={this.onToggleCUScheduleModal}
					changeActionType={this.onChangeActionType}
				/>
				<ScheduleTable
					startDate={startDate}
					endDate={endDate}
					openUpdateScheduleInfoModal={this.onOpenUpdateScheduleInfoModal}
				/>
				{cUScheduleModalVisible ? (
					<CUScheduleModal
						visible={cUScheduleModalVisible}
						actionType={actionType}
						handleClose={this.onToggleCUScheduleModal}
						{...scheduleItem}
					/>
				) : null}
			</React.Fragment>
		)
	}
}

export default SchedulePage
