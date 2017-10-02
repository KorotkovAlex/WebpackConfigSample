import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        //this.props.children рендер всех дочерних компонентов(search,authorization). 
        //Зависит какие в MainArea.jsx вложенные Router 
        return (           
            <div className="uk-width-1-2 uk-align-center uk-text-center">
                Main Area 
                {this.props.children}    
            </div>  
        );
    }
}

export default MainComponent;