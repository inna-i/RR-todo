import React from 'react'
import { Link } from 'react-router'

const FilterLink = ({ filter, children }) => (
	<Link
		to={filter === 'SHOW_ALL' ? '/' : filter}
		activeStyle={{
			background: 'none',
			color: '#34495E',
		}}
	>
		{children}
	</Link>
)

export default FilterLink