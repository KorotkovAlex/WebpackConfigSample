import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

class SearchComponent extends React.Component {
    render() {
        console.log("searchComponent");
        return <h2>I'm searchComponent</h2>;
    }
}

export default SearchComponent;