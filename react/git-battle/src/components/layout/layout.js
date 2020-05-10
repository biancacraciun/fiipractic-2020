import React, { Component } from 'react'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom"; 

import '../../styling/layout.scss';

import Header from '../header/header';
import About from '../pages/about/about';
import Battle from '../pages/battle/battle';
import DrawerToggleButton from '../UI/drawerToggleButton/drawerToggleButton';
import Backdrop from '../UI/backdrop/backdrop';
import SideDrawer from '../UI/sideDrawer/sideDrawer';
import Trending from '../pages/trending/popularUsers';

class Navigation extends Component {
    state = {
        show: false
    }

    componentDidUpdate(prevProps) {
        if(this.props.location !== prevProps.location && this.state.show) {
            this.setState({
                show: false
            })
        }
    }

    drawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    };

    backdropClickHandler = () => {
        this.setState({
            show: false
        })
    }

    render() {
        let backdrop = null;

        if(this.state.show) {
            backdrop = <Backdrop clicked={this.backdropClickHandler}/>
        };

        return (
            <div className="layout">
                <Router>
                    <div className="navigation">
                        <div className="drawer-toggle">
                            <DrawerToggleButton clickHandler={this.drawerToggleHandler}/>
                        </div>
                        <nav>
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
                        </nav>
                        <Header className="header"/>
                    </div>

                    <SideDrawer show={this.state.show}/>                    
                    {backdrop}

                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={About} />
                            <Route path="/popular_users" component={Trending} />
                            <Route path="/battle" component={Battle} />
                        </Switch> 
                    </div>
                </Router>
            </div>
        )
    }
};

export default Navigation;