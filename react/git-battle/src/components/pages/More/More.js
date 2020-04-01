import React, { Component } from 'react';
import './More.scss';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.goals = {
            about: [
                "Why do people set goals?",
                "How do goals work?",
                "Types of goals",
                "Goals and values",
                "Goal setting and mental health",
                "Setting goals",
                "SMART goals",
                "More tips for goal setting"
            ]
        }

        this.state = {
            fetchInfos: [],
            itemsToShow: 10,
            expanded: false,
            loading: false
        }
    };

    fetchData = () => {

        fetch('https://jsonblob.com/api/jsonBlob/06e1d2c6-7126-11ea-8c90-976b888d5ca7').then(response => {
          if(response.ok) {
            return response.json();
          } else {
            throw new Error(response);
          }
        }).then(data => {
            this.setState({
                fetchInfos: data.list,
            })
        }).catch(err => console.log(err))
    }


    componentDidMount() {
        this.fetchData()
    }

    showMore = () => {

        if(this.state.itemsToShow === 10) {
            this.setState({
                itemsToShow: 10,
                expanded: false,
                loading: true
            })

            setTimeout( () => {
                this.setState({
                    loading: false,
                    itemsToShow: this.state.fetchInfos.length,
                    expanded: true
                })
            }, 1000 )

        } else {
            this.setState({
                itemsToShow: 10,
                expanded: false,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className="more__ways">
                <div className="reference">
                    <a href="https://www.healthdirect.gov.au/motivation-how-to-get-started-and-staying-motivated" target="_blank">
                        Motivation: How to get started and staying motivated
                    </a>
                    <ul>
                        {
                            this.goals.about.map( (value, index) => {
                                return <li key={index}> {value} </li>
                            })
                        }
                    </ul>
                </div>

                <div className="fetch">
                    <ul>
                        {
                            this.state.fetchInfos.slice(0, this.state.itemsToShow).map( (value, index) => {
                                return <li key={index}> {value} </li>
                            })
                        }
                    </ul>

                    <button onClick={this.showMore}> Show </button>
                </div>
            </div>
        )
    }
};

export default Contact;

