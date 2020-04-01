import React, { Component } from 'react';

class Select extends Component {
    constructor(props) {
        super(props);

        this.state={
            isOpened: false,
            selectedOption: 'N/A',
            options: ["a", "b", "c"],
            firstName: "Alex",
            lastName: "Raescu"
        }

        this.getOptions= this.getOptions.bind(this);
        this.toggleSelect=this.toggleSelect.bind(this);

        console.log("CONSTRUCTOR")

    }

    componentWillMount() {
        console.log("WILL MOUNT")
    }

    render() {
        return (
            <div>
                <p onClick={this.toggleSelect} id="selector">{this.state.selectedOption}</p>
                
                <ul>
                    {this.getOptions()}
                </ul>
            </div>
        )
    }

    componentDidMount(newState, newProps) {
        // if(newState.selectedOption !== this.state.selectedOption) {
        //     return true;
        // }
        // return false;
        // se apeleaza dupa render, daca am face asta inainte (componentWillMount) sa se randeze
        // componeneta, nu va gasi nimic
        document.getElementById('selector').addEventListener('click', this.toggleSelect)
        // cand facem un addEventListener trebuie sa avem grija sa facem si un removeEventListener
        console.log("DID MOUNT")
    }

    shouldComponentUpdate (newState, newProps) {

        if(newState.selectedOption !== this.state.selectedOption) {
            return true;
        }

        return false;

        console.log("SHOULD UPDATE")
        return true;
    }

    componentWillUnmount() {
        document.getElementById('selector').removeEventListener('click', this.toggleSelect)
    }

    toggleSelect () {
        this.setState({
            isOpened: !this.state.isOpened
        });
    }

    getOptions() {
        if(this.state.isOpened) {
            return this.state.options.map( (el) => {
                return <li> {el} </li>
            })
        }
    }
}

export default Select;