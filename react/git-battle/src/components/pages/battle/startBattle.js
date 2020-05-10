import React from 'react';

import AboutBattle from './aboutBattle';
import '../../../styling/battle/battle.scss';

const startBattle = props => {
    return (
        <div className="start">
            <div>{props.errorMessage}</div> 
            <form className="form">
                <div className="inputs">
                    <input 
                        onKeyDown={props.eraseError}
                        id="firstUserName"
                        className="input_user"
                        type="text"
                        placeholder="Enter username">                       
                    </input>

                    <span>vs</span>

                    <input 
                        onKeyDown={props.eraseError}
                        id="secondUserName"
                        className="input_user"
                        type="text"
                        placeholder="Enter username">
                    </input>
                </div>
            
                <div className="button">
                    <button
                        onClick={props.handleClick}
                    >Battle</button>
                </div>
            </form>
            <AboutBattle />
    </div> 
    )
}

export default startBattle;