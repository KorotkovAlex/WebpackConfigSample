import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route} from 'react-router';

class Component2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            I'm component2
        </div>;
    }
}

module.exports = Component2;