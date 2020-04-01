import React, { Component } from 'react'; 
import './Modal.scss';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, modalComponent} = this.props;

        return (
            <div className="modal">
                <h3>{title}</h3>
                <section>
                    {modalComponent()}
                </section>
            </div>
        )
    }
}

export default Modal;