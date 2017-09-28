import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {Link} from 'react-router';

class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (  
            <div>       
                <ul className="uk-card-default uk-card-body uk-list-divider uk-list uk-align-left">
                    <li className="uk-text-center">Menu</li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/authorization">Authorization</Link></li>                             
                </ul>
            </div>
        );
    }
}

export default MenuComponent;