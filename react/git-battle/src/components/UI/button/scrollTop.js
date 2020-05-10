import React from 'react';

import '../../../styling/UI/scrollTop.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const scrollTop = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button onClick={scrollTop}> 
            <FontAwesomeIcon id="arrow-icon" icon={faArrowUp} />
        </button>
    )
}

export default scrollTop;