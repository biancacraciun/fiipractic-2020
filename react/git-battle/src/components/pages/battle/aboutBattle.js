import React from 'react';
import '../../../styling/battle/battle.scss';

const aboutBattle = () => {
    return (
        <div className="weapons">
            <label>Battle weapons:</label>
            <section>
                If you are an active github-er, <span>number of repositories</span> will bring you points. 
                Also it's important <span>number of public gits</span> too. <br />
                Don't worry!! You can recover if you have added on your GitHub profile a 
                <span> link to your blog </span> (or something like that). <br />
                You will collect points if you <span>hireable</span> or you are <span>part of a company</span>. <br/>
                Add these information on your profile! <br />
                Guess what? Numbers of <span>followers</span> and <span>following</span> will bring you the victory too!
            </section>
        </div>
    )
};

export default aboutBattle;