import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

class Component extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            I'm component
        </div>;
    }
}

module.exports = Component;