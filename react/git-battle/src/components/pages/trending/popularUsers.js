import React, { Component } from 'react';
import { trackPromise } from 'react-promise-tracker';

import '../../../styling/trending/popularUsers.scss';

import User from './user';
import ScrollTop from '../../UI/button/scrollTop';

class Trending extends Component {
    constructor() {
        super();

        this.state = {
            isVisible: 6,
            value: "",
            users: null,
            show: false,
            error: null
        }
    }

    fetchData = (val) => {
        trackPromise (
            fetch(`https://ghapi.huchen.dev/developers?language=${val}&since=daily`)
            .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error(response);
            }
        })
        .then(response => {
            this.setState({
                users: response
            })
            console.log(this.state.users)
        })
        .catch(err => console.log(err))
        )
    };

    change = (e) => {
        this.setState({
            value: e.target.value
        })
    };
    
    showUsers = () => {
        if(this.state.value !== "") {
            this.setState({ error: null })
            return this.fetchData(this.state.value);
        };
        return this.setState({ error: <p className="error">Please select a value.</p>});
    };

    loadMore = () => {
        this.setState((prevState) => {
            return {
                isVisible: prevState.isVisible + 6
            }
        })
    };

    render() {
        return (
            <div className="popular_users">
                <div>{this.state.error}</div>

                <label htmlFor="language">
                    Choose programming language. <br/>
                    See trending projects and developers.
                </label>

                <div className="selected_language" id="language">
                    <select className="options" id="language" onChange={this.change} value={this.state.value}>
                        <option value="" defaultValue disabled /* hidden */>Choose</option>
                        <option value="javascript">JavaScript</option>
                        <option value="c">C/C++</option>
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value="php">Php</option>
                    </select>

                    <button onClick={this.showUsers}>Show popular users</button>
                </div>

                {(this.state.users !== null) ? 
                    <div className="show-users">
                        <div className="users fade-in">
                            {this.state.users.slice(0, this.state.isVisible).map((user, index) => {
                                return <User 
                                    key={index}
                                    name={user.name}
                                    url={user.url}
                                    username={user.username}
                                    avatar={user.avatar}
                                    repository={user.repo.description}
                                    repository_url={user.repo.url}
                                    repository_name={user.repo.name}
                                />
                            })}
                        </div>
                        <div className="load-more">
                            {this.state.isVisible < this.state.users.length &&
                                <button id="loading" onClick={this.loadMore}>Load More</button>
                            }
                            <ScrollTop />
                        </div>
                    </div>
                : null}

            </div>
        )
    }
};

export default Trending;