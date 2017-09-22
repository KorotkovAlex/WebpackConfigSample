import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route} from 'react-router';
import {Component, Component2} from 'common';

ReactDom.render(
    <div>
        <Component />
        <Component2 />
    </div>, 
    document.getElementById("admin")
);

