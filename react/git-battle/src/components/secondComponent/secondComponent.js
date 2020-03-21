import React, { Component } from 'react';
import '../primaryComponent/primaryComponent.scss';

class secondComponent extends Component {

    render() {
        const text = this.props.text;
        return (
            <button className="second-button" id="click-button" type="button" value="Click">{text}</button>
        )
    }
}

export default secondComponent;