import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route} from 'react-router';

class Component3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            I'm component3
        </div>;
    }
}

module.exports = Component3;