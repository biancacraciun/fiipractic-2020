import React from 'react';
import '../../../styling/backdrop.scss';

const backdrop = (props) => {
    return props.show ? <div className="backdrop" onClick={props.clicked}></div> : null;
};

export default backdrop;