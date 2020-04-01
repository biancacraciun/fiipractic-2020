import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEnvelopeSquare,
    faBell 
} from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <h1>Fii Practic <i>__React.js__</i></h1> 
            </div>
        )
    }
}

export default Header;