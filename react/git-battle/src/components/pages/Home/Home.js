import React, { Component } from 'react';
import Modal from '../../ModalComponent/Modal';

import './Home.scss';
import '../../ModalComponent/Modal.scss';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    modal = () => {

        const { list } = this.props;

        return (
            <div>
                <ul className="modal__list">
                    {list.map( (value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
            </div>
        )
    }

    showModal = () => {

        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const { ways, motivationExperience } = this.props;

        return (
            <div className="home__page">
                <p>{motivationExperience}</p>

                <ul className="way__list">
                    {
                        ways.map( (value, index) => {
                            return <li key={index}>{value}</li>
                        })
                    }
                </ul>

                {
                    this.state.show && 
                    <Modal 
                        title={this.props.title}
                        modalComponent={this.modal}
                    /> 
                }

                <button onClick={this.showModal}>
                    Show 
                </button>
            </div>
        )
    }
};

export default Home;