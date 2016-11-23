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
        time: 0,
        completed: true,
        todo: '小伙子跟我学做菜吧！'
    }]
};

let store = createStore(reducer,initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);