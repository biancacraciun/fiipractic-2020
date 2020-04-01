import React, { Component } from 'react'; 

import './About.scss';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            valueArray: []
        }
    };  

    addToList = (event) => {
        const newValue = event.target.value;

        this.setState({
            value: newValue
        })
    };

    showList = () => {
        const item = this.state.valueArray;

        item.push(this.state.value)
        this.setState({
            valueArray: item
        })
    };

    focusInput = (event) => {
        event.target.value = ""
    };

    eraseValue = (index) => {
        let removed = [...this.state.valueArray]
        removed.splice(index, 1);

        this.setState({
            valueArray: removed
        })
    };


    render() {
        return (
            <div className="about">

                <div className="ask">
                    <p>What can you do to improve your performance?</p>
                    <p>Create your own list</p>
                </div>

                <input type="text" 
                    placeholder="Type here.."
                    onFocus={this.focusInput} 
                    onChange={this.addToList} 
                    value={this.state.value}
                />

                <button onClick={this.showList}>
                    Add to list
                </button>

                <ul>
                    {this.state.valueArray.map( (value, index) => {
                        return (
                            <li onClick={this.eraseValue} key={index}>
                                {value}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    
}

export default About;