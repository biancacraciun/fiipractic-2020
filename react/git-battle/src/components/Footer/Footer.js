import React, { Component } from 'react'; 
import './Footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="footer">
                <div id="social">
                    <p>Find us:</p>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Youtube</a>
                </div>
            </div>
        )
    }
}

export default Footer;