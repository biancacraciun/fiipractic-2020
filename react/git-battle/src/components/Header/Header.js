import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <h1>Layout practice</h1> 

                <div className="social">
                    <a href="#">Contact us!</a>
                    <a href="#">Subscribe</a>
                </div>
            </div>
        )
    }
}

export default Header;