import React from 'react';
import '../../../styling/UI/backdrop.scss';

const backdrop = (props) => {
    return <div className="backdrop" onClick={props.clicked}></div> 
};

export default backdrop;