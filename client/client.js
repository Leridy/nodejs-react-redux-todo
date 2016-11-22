/**
 * Created by Leridy on 2016/11/19.
 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from '../containers/App';
import reducer from  '../redux/reducer'

let initialState = {
    todos: [{
        id: 0,
        completed: false,
        text: '学习如何使用react & redux'
    }]
};

let store = createStore(reducer,initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);