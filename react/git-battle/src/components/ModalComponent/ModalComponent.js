import React, { Component } from 'react'; 
import './ModalComponent.scss';

class ModalComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Random"
        }
    }

    closeHandler () {
        console.log("Should close modal")
    };

    submitHandler () {
        console.log("Should submit")
    };

    render() {

        const {title, submitCallback, cancelCallback} = this.props;
        return (
            <div className="modal">
                <div className="header">
                    <h3>{title}</h3>
                </div>

                <div className="main__content">
                    {/* {this.props.children(this.state.text)} */}
                    {this.props.generateContent()}
                </div>

                <div className="side__bar">
                    <button onClick={cancelCallback}> Cancel </button>
                    <button onClick={submitCallback} type="submit">Submit</button>
                </div>
            </div>
        )
    }
}

export default ModalComponent;