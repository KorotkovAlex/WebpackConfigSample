import React from 'react';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (           
            <div className="uk-width-1-2 uk-align-center uk-text-center">
                Main Area 
                {this.props.children}    
            </div>  
        );
    }
}

export default MainComponent;