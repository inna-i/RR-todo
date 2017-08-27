import React from 'react'
import FilterLink from '../containers/FilterLink'

import '../styles/footer.sass'

const linksData = [
	{
		filter: 'SHOW_ALL',
		text: 'Show all'
	}, {
		filter: 'SHOW_ACTIVE',
		text: 'Active'
	}, {
		filter: 'SHOW_COMPLETED',
		text: 'Completed'
	}
];

const Footer = () => (
	<div className="todo-footer">
		Show:
		{
			linksData.map( (link, index) => (
				<FilterLink key={index} filter={link.filter}>{link.text}</FilterLink>
			))
		}
	</div>
)

export default Footer