import React, { Component } from 'react';
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
            <div className="menu">   
                <h3 onClick={toggleMenu} >{this.props.menu}</h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default Menu;