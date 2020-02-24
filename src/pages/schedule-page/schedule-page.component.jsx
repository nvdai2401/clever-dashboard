import React from 'react'

import ScheduleToolbar from '@components/schedule-toolbar/schedule-toolbar.component'
import ScheduleTable from '@components/schedule-table/schedule-table.component'

class SchedulePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			startDate: new Date(),
			endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
			cUScheduleModalVisible: false,
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

	render() {
		const { startDate, endDate, cUScheduleModalVisible } = this.state
		return (
			<React.Fragment>
				<ScheduleToolbar
					startDate={startDate}
					endDate={endDate}
					onDateChange={this.onDateChange}
					toggleCUScheduleModal={this.onToggleCUScheduleModal}
				/>
				<ScheduleTable
					startDate={startDate}
					endDate={endDate}
					cUScheduleModalVisible={cUScheduleModalVisible}
				/>
			</React.Fragment>
		)
	}
}

export default SchedulePage
