import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {pageCounter} from './reducers/index';
import promise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render((
    <BrowserRouter>
        <Provider store={createStoreWithMiddleware(pageCounter)}>
            <App/>
        </Provider>
    </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
