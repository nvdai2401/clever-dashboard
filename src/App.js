import React from 'react'

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
				{this.checkFoo ? <p>Foo is an array</p> : <p>Foo is NOT an array</p>}
			</div>
		)
	}
}

export default App
