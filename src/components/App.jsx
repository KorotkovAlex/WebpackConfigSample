import React from 'react';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer } from 'react-router-redux';
import {createStore, combineReducers} from 'redux';
import reducer from '../reducers/reducer.js';
// Создаем store
export var store = createStore(
    combineReducers({
        reducer: reducer,
        routing: routerReducer
    })
);
// Синхронизируем history со store
export var history = syncHistoryWithStore(browserHistory, store);
