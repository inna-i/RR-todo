import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import '../styles/app.sass';

const App = ({ params }) => {
	return (
		<div className="w-app">
			<h1 className="heading">React+Redux Todo List</h1>
			<AddTodo />
			<VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
			<Footer />
		</div>
	)
}

export default App