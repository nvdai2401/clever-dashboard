import React from 'react'

import ScheduleToolbar from '@components/schedule-toolbar/schedule-toolbar.component'
import ScheduleTable from '@components/schedule-table/schedule-table.component'

class SchedulePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			startDate: new Date(),
			endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
		}
	}

	onDateChange = ({
		startDate = this.state.startDate,
		endDate = this.state.endDate,
	}) => {
		this.setState({ startDate, endDate })
	}

	render() {
		const { startDate, endDate } = this.state
		return (
			<React.Fragment>
				<ScheduleToolbar
					startDate={startDate}
					endDate={endDate}
					onDateChange={this.onDateChange}
				/>
				<ScheduleTable startDate={startDate} endDate={endDate} />
			</React.Fragment>
		)
	}
}

export default SchedulePage
