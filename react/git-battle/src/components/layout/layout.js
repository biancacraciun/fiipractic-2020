import React, { Component } from 'react'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom"; 
import '../../styling/layout.scss'; 

import Header from '../reusable/header/header';
import About from '../pages/about/about';
import Battle from '../pages/battle/battle';
import PopularUsers from '../pages/trending/popularUsers';

class Navigation extends Component {

    render() {
        return (
            <div className="layout">
                <Router>
                    <div className="navigation">
                        <div>
                            <NavLink 
                                exact to="/" 
                                className='navigation_link'
                                activeClassName="navigation_link--active"
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/popular_users"
                                className="navigation_link"
                                activeClassName="navigation_link--active"
                            >
                                Trending
                            </NavLink>
                            <NavLink 
                                to="/battle" 
                                id="battle_navigation_link"
                                className='navigation_link'
                                activeClassName="navigation_link--active"
                            >  
                                Battle
                            </NavLink>
                        </div>
                        <Header className="header"/>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <About />
                            </Route>

                            <Route path="/popular_users">
                                <PopularUsers />
                            </Route>

                            <Route path="/battle">
                                <Battle />
                            </Route>
                        </Switch>   
                    </div>
                </Router>
            </div>
        )
    }
};

export default Navigation;