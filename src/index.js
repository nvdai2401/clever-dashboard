import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import client from './client'

import App from './App'

import 'normalize.css'
import './index.scss'

const Root = () => (
	<BrowserRouter>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))
