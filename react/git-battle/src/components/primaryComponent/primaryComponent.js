import React, { Component } from 'react';
import './primaryComponent.scss';

class primaryComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.type;
        // console.log(display)

        return (
            <div className={this.props.type} id="click-button" type="button" value="Click">{display}</div>
        )
    }
}

export default primaryComponent;