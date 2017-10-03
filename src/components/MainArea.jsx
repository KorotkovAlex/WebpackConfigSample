import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route} from 'react-router';
import {asyncComponent, store, history} from 'common';
const AsyncAuthorization = asyncComponent(() => import('./AuthorizationComponent.jsx'));
const AsyncSearch = asyncComponent(() => import('./SearchComponent.jsx'));
const AsyncMain = asyncComponent(() => import('./MainComponent.jsx'));
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class MainArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <Provider store = {store}>
                <Router history = {history}>
                    <Route path = {this.props.basePath} component={AsyncMain}>                  
                        <Route path = {this.props.basePath + '/search'} component = {AsyncSearch}/>
                        <Route path = {this.props.basePath + '/authorization'} component = {AsyncAuthorization}/>
                    </Route>
                </Router>
            </Provider>
        )
    };
}

export function myRender(name, basePath) {
    return ReactDom.render(
        // Вызываем компонент и передаем basePath
        <MainArea basePath={basePath} /> ,
        document.getElementById(name)
    );
}

export default MainArea;