import React from 'react';
import '../../../styling/UI/drawerToggle/drawerToggleButton.scss';

const drawerToggleButton = (props) => {
    return (
        <button className="toggle-button" onClick={props.clickHandler}>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
        </button>
    )
};

export default drawerToggleButton;