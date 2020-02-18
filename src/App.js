import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '@pages/home-page/home-page.component'
import Header from '@components/header/header.component'

import './App.scss'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			foo: [1, 2, 3],
		}
	}
	render() {
		return (
			<Fragment>
				<Header />
				<div>
					<Switch>
						<Route exact path='/' component={HomePage} />
					</Switch>
				</div>
			</Fragment>
		)
	}
}

export default App
