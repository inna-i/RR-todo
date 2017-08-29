import { browserHistory } from 'react-router';

let nextTodoId = 0

export default class TodoActionCreator {

	static addTodo(text) {
		return {
			type: 'ADD_TODO',
			id: nextTodoId++,
			text
		}
	}

	static setVisibilityFilter(filter) {
		return {
			type: 'SET_VISIBILITY_FILTER',
			filter
		}
	}

	static toggleTodo(id) {
		return {
			type: 'TOGGLE_TODO',
			id
		}
	}

	static fetchTodos(userId) {
		return (dispatch) => {
			const getTodoUrl = 'http://getTodos.com/api'
			const url = `${getTodoUrl}/todos/${id}`;
			return fetch(url, { credentials: 'same-origin' })
				.then(req => req.json())
				.then((json) => {
					dispatch(this.fetchTodosSuccess(json));
				})
				.catch((ex) => {
					console.log('Fetch failed ' + ex);
				});
		};
	}

	static fetchTodosSuccess(resource) {
		return {
			type: 'FETCH_TODOS_SUCCESS',
			payload: resource,
		};
	}

	static changeModule(module) {
	browserHistory.push(`/${module.path}`);
		return {
			type: 'MODULE_CHANGE',
			payload: module.name,
		};
	}
}