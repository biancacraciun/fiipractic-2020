import React, {Component} from 'react';
import { trackPromise } from 'react-promise-tracker';

import { compareUsers as compareFn } from './usersFunction/compare';
import { fetchData as fetchUsers } from '../../../api/battleAPI';

import '../../../styling/battle/battle.scss';
import '../../../styling/battle/modal.scss';

import Users from './usersBattle';
import Backdrop from '../../UI/backdrop/backdrop';
import StartBattle from './startBattle';

class UsersBattle extends Component {
    constructor(props) {
        super (props);

        this.state = {
            username1: null,
            username2: null,
            score: null,
            result: null,
            isSubmitted: false,
            show: false,
            errorMessage: "",
        }
    }

    componentDidMount() {
        fetchUsers();
    }

    handleClick = (e) => {
        e.preventDefault();

        const firstUser = document.getElementById("firstUserName").value;
        const secondUser = document.getElementById("secondUserName").value;
        
        if(firstUser === "" || secondUser === "") {
            const error = <p className="error_message">
                <q>There are no pleasures in a fight but some of my fights have been a pleasure to win.</q> <br/> 
                Please add valid users for battle!"
            </p>

            this.setState({
                errorMessage: error
            });
            return;
        };

        if(firstUser === secondUser) {
            const error = <p className="error_message">Please add different users!</p>
            this.setState({
                errorMessage: error
            });
            return;
        }

        trackPromise (
            fetchUsers(firstUser).then(user1 => {
                this.setState({ username1: {user1} });
    
                fetchUsers(secondUser).then(user2 => {
                    this.setState({ username2: {user2} })
                
                    if(this.state.username1.user1.message === "Not Found" || this.state.username2.user2.message === "Not Found") {
                        this.setState({
                            errorMessage: <p className="error_message">Users not found. Try again!</p>
                        })
                        return;
                    }
    
                    const score = compareFn(this.state.username1.user1, this.state.username2.user2);
                    console.log(score);
    
                    // 0 -- user1 won, 1 -- user2 won.
                    const result = score.user1Score > score.user2Score ? 0 : 1;
        
                    this.setState({
                        result: result,
                        score: score,
                        isSubmitted: true,
                        show: true
                    });
                });
            })
        );
    };

    showUser = () => {
        let users = [this.state.username1.user1, this.state.username2.user2];

        return users.map((user, index) => {
            return (
                <Users 
                    key={index}
                    status={(this.state.result === index) ? 'Winner' : 'Looser'}
                    avatar={user.avatar_url}
                    name={user.name}
                    username={user.login}
                    url={user.html_url}
                    bio={user.bio}
                    following={user.following}
                    followers={user.followers}
                    repos={user.public_repos}
                    gits={user.public_gists}
                    company={user.company}
                    blog={user.blog}
                    location={user.location}
                />
            )
        });
    };
    
    eraseError = () => {
        this.setState({
            errorMessage: "",
        })
        return;
    };

    backdropClick = () => {
        this.setState({
            isSubmitted: false,
            show: false
        })
    };


    render() {
        let backdrop = null;
        
        if(this.state.show) {
            backdrop = <Backdrop clicked={this.backdropClick}/>
        }

        return (
            <main className="battle">
                {backdrop}
                {(this.state.isSubmitted) ? 
                    <div className="modal"> 
                        {this.showUser()} 
                    </div> : 
                    <StartBattle 
                        errorMessage={this.state.errorMessage}
                        eraseError={this.eraseError}
                        handleClick={this.handleClick}
                    />
                }
            </main>
        )
    }
};

export default UsersBattle;