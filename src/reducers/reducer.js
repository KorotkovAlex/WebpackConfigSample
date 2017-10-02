import { LOCATION_CHANGE } from 'react-router-redux';
import React, { PropTypes } from 'react';

const initialState = {
    basePath: ''
};

function changeBasePath(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type){
    case 'CHANGE_BASE_PATH':          
        return Object.assign( {}, state, {basePath: action.value});
    default: 
        return state;
    }
}
export default changeBasePath;