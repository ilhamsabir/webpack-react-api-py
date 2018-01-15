import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import Main from './pages/Main.jsx'
// import Dashboard from './pages/Dashboard.jsx'
// import Login from './pages/Login.jsx'

const MainRoute = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</div>
		</div>
	</Router>
)

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)

const targetDom = document.getElementById('app')

ReactDOM.render(<MainRoute />, targetDom)
