import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import reducers from './reducers';
import Root from './components/Root';

const logger = createLogger({});

let store = createStore(
	reducers,
	applyMiddleware(thunkMiddleware, promise(), logger)
)

render(
	<Root store={store} />,
	document.getElementById('root')
)