import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import { isProduction } from '../config';

import reducers from './reducers';
import rootSaga from './sagas';

const history         = createBrowserHistory();
const sagaMiddleware  = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares     = [sagaMiddleware, routeMiddleware];

const composeEnhancers = (
	!isProduction
	&& typeof window === 'object'
	&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
)
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 20 })
	: compose;

const store = createStore(
	combineReducers({
		...reducers,
		router: routerReducer,
	}),
	composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export {
	store,
};
