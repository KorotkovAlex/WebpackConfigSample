import React from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        // сохраняем basePath в store, если еще не создан
        if(this.props.reducer.basePath == '') {
            this.props.changeBasePath(this.props.basePath)
        }              
    }
    render() {
        return (  
            <div>  
                <ul className="uk-card-default uk-card-body uk-list-divider uk-list uk-align-left">
                    <li className="uk-text-center">Menu</li>
                    <li>
                        <Link to={this.props.basePath + '/search'}>
                                Search
                        </Link>
                    </li>
                    <li>
                        <Link to={this.props.basePath + '/authorization'}>
                                Authorization
                        </Link>
                    </li>                             
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {        
        changeBasePath: (event) => dispatch({type:'CHANGE_BASE_PATH', value: event })
    };
};

const mapStateToProps = (state) => {
    return state;
};

const Menu = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuComponent);

export default Menu;