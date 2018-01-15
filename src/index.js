import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'

const MainRoute = () => (
	<Router>
		<div>
			<Route exact path="/" component={Login} />
			<Route path="/dashboard" component={Dashboard} />
		</div>
	</Router>
)

const targetDom = document.getElementById('app')

ReactDOM.render(<MainRoute />, targetDom)
