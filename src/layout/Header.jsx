import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle collapsed"
							data-toggle="collapse"
							data-target="#navbar"
							aria-expanded="false"
							aria-controls="navbar"
						>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<a className="navbar-brand" href="#">
							Project name
						</a>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li className="active">
								<a href="/">Home</a>
							</li>
							<li className="">
								<Link to="/about">About</Link>
							</li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="../navbar/">Default</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Header
