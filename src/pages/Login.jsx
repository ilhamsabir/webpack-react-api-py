import React, { Component } from 'react'
import axios from 'axios'
import InputUsername from '../components/login/InputUsername.jsx'
import InputPassword from '../components/login/InputPassword.jsx'
import { Redirect } from 'react-router'

const postHeader = {
	'Content-Type': 'multipart/form-data',
}

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			errorMessage: '',
			errorStatus: '',
			errorHtml: '',
		}

		this.handleChangeInput = this.handleChangeInput.bind(this)
		this.handleSubmitLogin = this.handleSubmitLogin.bind(this)
	}

	// this for handle click/submit login
	handleSubmitLogin(e) {
		e.preventDefault()

		this.requestUserAuth()
	}

	// request user auth
	async requestUserAuth() {
		const url = 'https://api.managix.id/auth'

		let form = new FormData()

		form.append('username', this.state.username)
		form.append('password', this.state.password)

		const response = await axios.post(url, form)

		if (response.data.error === 0) {
			this.setState({
				errorStatus: response.data.error,
			})
		} else {
			let html = (
				<div className="alert alert-danger" role="alert">
					Error, {this.state.errorMessage}
				</div>
			)

			this.setState({
				errorStatus: response.data.error,
				errorMessage: response.data.message,
				errorHtml: html,
			})
		}
	}

	// this for handle every input change
	handleChangeInput(e, type) {
		switch (type) {
			case 'USERNAME':
				this.setState({
					username: e.target.value.trim(),
				})
				break

			case 'PASSWORD':
				this.setState({
					password: e.target.value.trim(),
				})
				break

			default:
				break
		}
	}

	// tag html error login
	get errorLoginHtml() {
		let html = this.state.errorHtml

		return html
	}

	// redirect
	get successLoginHtml() {
		if (this.state.errorStatus === 0) {
			return <Redirect to="/dashboard" />
		}
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-md-4 col-md-offset-4">
						<div className="panel panel-default">
							<div className="panel-heading">
								<strong> Sign in to continue</strong>
							</div>
							<div className="panel-body">
								<div className="row">
									{this.errorLoginHtml}
									{this.successLoginHtml}
									<div className="col-sm-12 col-md-10  col-md-offset-1 ">
										<div className="form-group">
											<InputUsername
												handleChangeInput={
													this.handleChangeInput
												}
											/>
										</div>
										<div className="form-group">
											<InputPassword
												handleChangeInput={
													this.handleChangeInput
												}
												dataPassword="10000"
											/>
										</div>
										<div className="form-group">
											<button
												className="btn btn-success btn-sm"
												onClick={this.handleSubmitLogin}
											>
												Login
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login
