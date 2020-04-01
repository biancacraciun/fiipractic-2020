import React, { Component } from 'react';

import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { 
    faMapMarkerAlt, 
    faEnvelope,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { 
    faFacebookSquare,
    faLinkedin,
    faRedditSquare,
    faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props)
    };

    render() {

        return (
            <div className="footer">
                <div id="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x"/>
                    <p>Romania, Iasi, str. Palat nr. 1, cladirea E3</p>
                </div>

                <div id="email">
                    <a href="mailto:someone@example.com" target="_top" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                    </a>
                    <p>someone@example.com</p>
                </div>

                <div id="phone">
                    <FontAwesomeIcon icon={faPhone}  size="2x"/>
                    <p>0232125488</p>
                </div>

                <div className="social__contact">
                    <div className="social">
                        <FontAwesomeIcon className="icon" icon={faFacebookSquare} size="2x"/>
                        <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x"/>
                        <FontAwesomeIcon className="icon" icon={faTwitterSquare} size="2x"/>
                        <FontAwesomeIcon className="icon" icon={faRedditSquare} size="2x"/>
                    </div>
                    <a href="#">Terms {"&"} Conditions</a>
                </div>
            </div>
        )
    }
}

export default Footer;