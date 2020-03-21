import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                We will pass content from props :D
            </div>
        )
    }
}

export default Main;