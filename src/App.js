import React from 'react'
// import { Router, Switch } from 'react-router-dom'

import HomePage from '@pages/home-page/home-page.component'

import isArray from 'lodash/isArray'

import './App.scss'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			foo: [1, 2, 3],
		}
	}

	checkFoo = () => {
		return isArray(this.state.foo)
	}
	render() {
		return (
			<div className='title'>
				<HomePage />
				{this.checkFoo ? <p>Foo is an array 1</p> : <p>Foo is NOT an array</p>}
			</div>
		)
	}
}

export default App
