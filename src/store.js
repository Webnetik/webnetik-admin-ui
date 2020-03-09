import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from './reducers';

export const history = createBrowserHistory({
    basename: '/'
});

const store = createStore(
    reducers(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunkMiddleware
        )
    )
);

export default store;