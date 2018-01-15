import React, { Component } from 'react'

class InputPassword extends Component {
	render() {
		return (
			<div>
				<div className="input-group">
					<span className="input-group-addon">
						<i className="glyphicon glyphicon-lock" />
					</span>
					<input
						className="form-control"
						placeholder="Password"
						name="password"
						type="password"
						onChange={e =>
							this.props.handleChangeInput(e, 'PASSWORD')
						}
					/>
				</div>
			</div>
		)
	}
}

export default InputPassword

// // cell ad account
// const Password = ({ handleChangeInput, dataPassword }) => {
// 	const handleChange = e => {
// 		handleChangeInput(e, 'PASSWORD')
// 	}

// 	return (
// 		<div>
// 			<input
// 				className="form-control"
// 				placeholder="Password"
// 				name="password"
// 				type="password"
// 				// onChange={e => this.props.handleChangeInput(e, 'PASSWORD')}
// 				onChange={e => handleChange(e)}
// 			/>
// 		</div>
// 	)
// }

// export default Password
