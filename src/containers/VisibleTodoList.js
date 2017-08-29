import { connect } from 'react-redux'
import TodoActionCreator from '../actions/TodoActionCreator'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		todos: getVisibleTodos(state.todos, ownProps.filter)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(TodoActionCreator.toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList