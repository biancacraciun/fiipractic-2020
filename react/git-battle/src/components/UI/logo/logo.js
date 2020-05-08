import React from 'react';
import '../../../styling/logo/logo.scss';

const logo = () => {
    return (
        <div className="logo">
            <div className="faith">
                <div className="first_sword">
                    <div className="sword"></div>
                    <div className="hand"></div>
                    <div className="handII"></div>
                    <div className="handIII"></div>
                    <div className="handIV"></div>
                </div>
                <div class="second_sword">
                    <div className="sword"></div>
                    <div className="hand"></div>
                    <div className="handII"></div>
                    <div className="handIII"></div>
                    <div className="handIV"></div>
                </div>
            </div>
            <div className="title">Git Battle</div>
        </div>
    )
};

export default logo;