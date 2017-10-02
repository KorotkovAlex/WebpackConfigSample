import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import { connect } from 'react-redux';
import {Router, Route} from 'react-router';
import {asyncComponent,store, history} from 'common';
import PropTypes from 'prop-types';
const MenuComponent = asyncComponent(() => import('./MenuComponent.jsx'));

class MenuArea extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.reducer)
    }
    // Создаем Router.
    // В MenuComponent передаем basePath, для того чтобы в store сохранить значение 
    render() {
        return (           
            <Provider store = {store}>
                <Router history = {history}>
                    <Route path = {this.props.basePath} component={() => (<MenuComponent basePath={this.props.basePath} />)}>                
                        <Route path = {this.props.basePath + '/search'} component = {MenuComponent}/>
                        <Route path = {this.props.basePath + '/authorization'} component = {MenuComponent}/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export function myRender(name, basePath) {
    return ReactDom.render(
        // Вызываем компонент и передаем basePath
        <MenuArea basePath={basePath} /> ,
        document.getElementById(name)
    );
}

export default MenuArea
