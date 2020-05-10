import React from 'react';
import '../../../styling/about.scss';
import '../../../styling/layout.scss';

import Logo from '../../UI/logo/logo';

const about = () => {  
    return (
        <div className="about">
            <div className="intro">
                Enjoy the github-ers faith. <br />
                Click <span>Battle</span> for more!
            </div>
            <Logo className="logo"/> 
        </div>
    );
};

export default about;