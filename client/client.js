/**
 * Created by Leridy on 2016/11/19.
 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from '../containers/App';
import reducer from  '../redux/reducer'


let state = {todos:[]};


let store = createStore(reducer, state);


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);