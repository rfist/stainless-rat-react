import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {pageCounter} from './reducers/index';

let store = createStore(pageCounter);

ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
