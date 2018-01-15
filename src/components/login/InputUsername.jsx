import React, { Component } from 'react'

class InputUsername extends Component {
	render() {
		return (
			<div>
				<div className="input-group">
					<span className="input-group-addon">
						<i className="glyphicon glyphicon-user" />
					</span>
					<input
						className="form-control"
						placeholder="Username"
						type="text"
						onChange={e =>
							this.props.handleChangeInput(e, 'USERNAME')
						}
					/>
				</div>
			</div>
		)
	}
}

export default InputUsername
