import React, { Fragment, Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.scss'

const HomePage = lazy(() => import('@pages/home-page/home-page.component'))
const SchedulePage = lazy(() =>
	import('@pages/schedule-page/schedule-page.component')
)
const NavBar = lazy(() => import('@components/navbar/navbar.component'))

class App extends React.Component {
	render() {
		return (
			<Suspense fallback={<div>Loading...</div>}>
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
			</Suspense>
		)
	}
}

export default App
