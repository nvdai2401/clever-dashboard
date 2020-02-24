import React from 'react'

import ScheduleToolbar from '@components/schedule-toolbar/schedule-toolbar.component'
import ScheduleTable from '@components/schedule-table/schedule-table.component'
import CUScheduleModal from '@components/cu-schedule-modal/cu-schedule-modal.component'

class SchedulePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			startDate: new Date(),
			endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
			cUScheduleModalVisible: false,
			actionType: 'create',
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

	render() {
		const {
			startDate,
			endDate,
			cUScheduleModalVisible,
			actionType,
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
				<ScheduleTable startDate={startDate} endDate={endDate} />
				{cUScheduleModalVisible ? (
					<CUScheduleModal
						visible={cUScheduleModalVisible}
						actionType={actionType}
						handleClose={this.onToggleCUScheduleModal}
					/>
				) : null}
			</React.Fragment>
		)
	}
}

export default SchedulePage
