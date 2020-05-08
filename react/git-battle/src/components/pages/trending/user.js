import React from 'react';
import { capitalized as capitalizeName } from '../battle/usersFunction/capitalized';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import {  faGithub } from '@fortawesome/free-brands-svg-icons';

import '../../../styling/trending/trendingUser.scss';

const user = (props) => {

    return (
        <div className="user">
            <h2>{capitalizeName(props.name)}</h2>
            <a 
                href={props.url} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={props.avatar} name={props.name} alt={props.name} />
            </a>
            <ul className="list">
                <li>
                    <FontAwesomeIcon className="icon" icon={ faGithub } />
                    <a href={props.url} target="_blank" rel="noopener noreferrer">
                        {props.username}
                    </a>
                </li>
                <li>
                    <FontAwesomeIcon className="icon" icon={ faFolderOpen } />
                    <a href={props.repository_url} target="_blank" rel="noopener noreferrer">
                        <span> Trending: </span> {props.repository_name}
                    </a>
                </li>
                <li>About: {props.repository}</li>
            </ul>
        </div>
    )
};

export default user;