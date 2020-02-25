import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '@pages/home-page/home-page.component'
import SchedulePage from '@pages/schedule-page/schedule-page.component'
import NavBar from '@components/navbar/navbar.component'

import './App.scss'

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/schedule' component={SchedulePage} />
					<Route path='/reports' component={() => <div>Report</div>} />
					<Route path='/utils' component={() => <div>utils</div>} />
					<Route
						path='/sale-management'
						component={() => <div>sale-management</div>}
					/>
					<Route
						path='/hr-management'
						component={() => <div>hr-management</div>}
					/>
					<Route path='/system' component={() => <div>system</div>} />
					<Route path='/backup' component={() => <div>backup</div>} />
					<Route path='/contact' component={() => <div>contact</div>} />
					<Route path='/password' component={() => <div>password</div>} />
				</Switch>
			</Fragment>
		)
	}
}

export default App
