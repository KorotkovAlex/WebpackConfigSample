import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route} from 'react-router';
import {asyncComponent,store, history} from 'common';
const MenuComponent = asyncComponent(() => import('./MenuComponent.jsx'));
export function myRender(name) {
    return ReactDom.render(
        <Provider store = {store}>
            <Router history = {history}>
                <Route path = '/' component = {MenuComponent}>                
                    <Route path = 'search' component = {MenuComponent}/>
                    <Route path = 'authorization' component = {MenuComponent}/>
                </Route>
            </Router>
        </Provider>,
        document.getElementById(name)
    );
}
