import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';
import More from '../../pages/More/More';
import ContactForm from '../../pages/Contact/Contact';
import './Menu.scss';

class Menu extends Component {
    constructor(props) {
        super(props);   

        this.state = {
            expanded: false
        }
    }

    render() {
        let options = this.props.options;
        let listItems = [];

        if(this.state.expanded) {
            listItems = options.map( (option, index) => {
                return <li key={index}>{option}</li>
            })
        }

        const toggleMenu = () => {
            this.setState({
                expanded: !this.state.expanded
            })
        }

        return (
            <div className="menu_">   
                <Router>
                    <div className="menu">
                        {/* <a href="/about" className="navigationLink">About</a> */}
                        <Link to="/home" className="navigation__link"> Home</Link>
                        <Link to="/about" className="navigation__link">About</Link>
                        <Link to="/more" className="navigation__link">More</Link>
                        <Link to="/contactform" className="navigation__link">Contact</Link>
                        {/* {listItems} */}
                    </div>

                    <div className="content">
                        <Switch>
                            <Route exact path="/home">
                                <Home 
                                    list={this.props.list}
                                    title={this.props.title}
                                    ways={this.props.ways}
                                    motivationExperience={this.props.motivation}
                                />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/more">
                                <More />
                            </Route>
                            <Route path="/contactform">
                                <ContactForm />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Menu;