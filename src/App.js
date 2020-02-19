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
				</Switch>
			</Fragment>
		)
	}
}

export default App
