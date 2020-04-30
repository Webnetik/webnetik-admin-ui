import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import store, {history} from './store';

import 'antd/dist/antd.css';
import '../assets/style/basic.scss';

// import axios from 'axios';

import App from './app';
// import './common/actions/axiosInstances';

if (module.hot) {
    module.hot.accept();
}

/*axios.interceptors.request.use(function (config) {
}, function (error) {
    return Promise.reject(error);
});*/

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);
