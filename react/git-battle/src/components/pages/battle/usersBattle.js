import React from 'react';
import '../../../styling/battle/battleUsers.scss';

import { capitalized as capitalize } from './usersFunction/capitalized';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faFolderOpen, faBuilding, faBlog, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

const users = (props) => {
    return (
        <div className="show_user">
            <header>
                <h2 style={props.status === 'Winner' ? 
                    { color: '#BE3144', textAlign: 'center' } : 
                    { color: 'white', textAlign: 'center' }}
                >
                    {props.status}
                </h2>
            </header>

            <div className="users">
                <div className="avatar">
                    <a href={props.url} target="_blank" rel="noopener noreferrer">
                        <img src={props.avatar} alt={props.name} name={props.name} />
                    </a>
                </div>

                <div className="name">
                    {capitalize(props.name)}
                </div>

                <div className="profile_info">
                    <ul>
                        <li>
                            {(props.bio !== null) ? props.bio : null}
                        </li>
                        <li> {props.location !== null ? 
                            <div>
                                <FontAwesomeIcon className="icon" icon={faStreetView}/>
                                {capitalize(props.location)}
                            </div>
                            : null} 
                        </li>
                        <li>
                            <FontAwesomeIcon className="icon" icon={ faUserCircle }/>
                            <a className="user_name" href={props.url} target="_blank" rel="noopener noreferrer">
                                {props.username}
                            </a>
                        </li>
                        <li>
                            <span className="span">{props.following}</span> following
                        </li>
                        <li>
                            <span className="span">{props.followers}</span> followers
                        </li>
                        <li>
                            <FontAwesomeIcon className="icon" icon={ faFolderOpen }/>
                            <span className="span">{props.repos}</span> repositories
                        </li>
                        <li>
                            <FontAwesomeIcon className="icon" icon={ faGitAlt }/>
                            <span className="span">{props.gits}</span> gits
                        </li>
                        <li>
                            {(props.company !== null) ? 
                            <span className="span">
                                <FontAwesomeIcon className="icon" icon={ faBuilding }/>
                                Company: {props.company}
                            </span> 
                            : null}
                        </li>
                        <li id="click_blog">
                            {(props.blog !== "") ? 
                            <a href={props.blog} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="icon" icon={ faBlog }/>
                                Click <span className="span click_here">here</span> for blog
                            </a> 
                            : null}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default users;