import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route} from 'react-router';
import {asyncComponent, store, history} from 'common';
const AsyncAuthorization = asyncComponent(() => import('./AuthorizationComponent.jsx'));
const AsyncSearch = asyncComponent(() => import('./SearchComponent.jsx'));
const AsyncMain = asyncComponent(() => import('./MainComponent.jsx'));

export function myRender(name) {
    return ReactDom.render(
        <Provider store = {store}>
            <Router history = {history}>
                <Route path = '/' component = {AsyncMain}>  
                    <Route path = 'search' component = {AsyncSearch}/> 
                    <Route path = 'authorization' component = {AsyncAuthorization}/>
                </Route>
            </Router>
        </Provider>, 
        document.getElementById(name)
    );
}

