import React from 'react';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer } from 'react-router-redux';
import {createStore, combineReducers} from 'redux';

export var store = createStore(
    combineReducers({
        routing: routerReducer
    })
);

const action = type => store.dispatch({type});
export var history = syncHistoryWithStore(browserHistory, store);
