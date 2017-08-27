import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = props => {
	let input

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault()
					if (!input.value.trim()) {
						return
					}
					props.onSubmitClick(input.value);
					input.value = ''
				}}
			>
				<input
					ref={node => {
						input = node
					}}
				/>
				<button type="submit">
					Add Todo
				</button>
			</form>
		</div>
	)
};

AddTodo.propTypes = {
	onSubmitClick: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
	return {}
};

const mapDispatchToProps = dispatch => {
	return {
		onSubmitClick: text => dispatch(addTodo(text)),
	}
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default AddTodo