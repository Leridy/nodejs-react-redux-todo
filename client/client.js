/**
 * Created by Leridy on 2016/11/19.
 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from '../containers/App';
import reducer from  '../redux/reducer'
import $ from 'jquery'


function getData() {
    let initialState = [];
    $.get('/todo/getAll', function (data) {
        data.todos.reverse().forEach(function (ele) {
            initialState.push(ele);
        });
    });
    return {todos: initialState};
}



let store = createStore(reducer, getData());


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);