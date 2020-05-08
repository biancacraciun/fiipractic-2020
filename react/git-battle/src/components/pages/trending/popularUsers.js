import React, { Component } from 'react';
import { trackPromise } from 'react-promise-tracker';

import '../../../styling/trending/popularUsers.scss';
import User from './user';

class PopularUsers extends Component {
    constructor() {
        super();

        this.state = {
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
                console.log(response);
                return response.json();
            } else {
                throw new Error(response);
            }
        })
        .then(response => {
            this.setState({
                users: response
            })
        })
        .catch(err => console.log(err))
        )
    }
            
    change = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    
    showUsers = () => {
        if(this.state.value !== "") {
            this.setState({ error: null })
            return this.fetchData(this.state.value);
        };
        return this.setState({ error: <p className="error">Please select a value.</p>});
    }

    render() {
        return (
            <div className="popular_users">
                <label htmlFor="language">
                    Choose programming language. <br/>
                    See trending projects and developers.
                </label>
                <div className="selected_language">
                    <select className="options" id="language" onChange={this.change} value={this.state.value}>
                        <option value="" defaultValue disabled /* hidden */>Choose</option>
                        <option value="javascript">JavaScript</option>
                        <option value="c">C/C++</option>
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value="php">Php</option>
                    </select>

                    <button type="submit" onClick={this.showUsers}>Show popular users</button>
                </div>

                <div>{this.state.error}</div>

                <div className="users">
                    {(this.state.users !== null) ? 
                        this.state.users.map((user, index) => {
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
                        }) 
                        : null
                    }
                </div>
            </div>
        )
    }
};

export default PopularUsers;