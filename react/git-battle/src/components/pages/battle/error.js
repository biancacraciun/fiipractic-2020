import React from 'react';

const error = (props) => {
    if(props.show) {
        return (
            <>
                <q>There are no pleasures in a fight but some of my fights have been a pleasure to win.</q> 
                <p>Please add valid users for battle!</p>
            </>
        )
    }
    return  null;

};

export default error;