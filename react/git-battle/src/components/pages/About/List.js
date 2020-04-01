import React from 'react'; 

// import './About.scss';

const list = (props) => {
    return (
        <ul>    
            {props.motivationList.map( (value, index) => {
                return <li key={index}>{value}</li>
            })}
        </ul>
    )
};

export default list;