import React, { Component } from "react";

import Header from "../components/reusable/Header/Header";
import Menu from '../components/reusable/Menu/Menu.js';
import Footer from "../components/reusable/Footer/Footer";
// import Modal from '../components/ModalComponent/ModalComponent';

import "../styles/style.scss";

export class App extends Component {
  constructor(props) {
    super(props);

    this.data = {
      motivation: "Life-changing affirmation",
      list: [
        "I possess the qualities needed to be extremely successful",
        "Creative energy surges through me and leads me to new and brilliant ideas",
        "Happiness is a choice.  I base my happiness on my own accomplishments and the blessings I've been given",
        "My ability to conquer my challenges is limitless; my potential to succeed is infinite",
        "My thoughts are filled with positivity and my life is plentiful with prosperity",
        "Everything that is happening now is happening for my ultimate good",
        "Though this times are difficult, they are only a short phase of life",
        "I am conquering my illness; I am defeating it steadily each day",
        "My life is just beginning."
      ],
      motivationExperience: "Motivation is the experience of desire or aversion (you want something, or want to avoid or escape something). As such, motivation has both an objective aspect (a goal or thing you aspire to) and an internal or subjective aspect (it is you that wants the thing or wants it to go away).",
      ways: [
        "Motivation is internal - be your own coach; if you believe you will fail or succeed you're right",
        "Remember what motivates you - who are you doing this for? keep a reminder on your desk of what you're working toward",
        "Challenge yourself with a daily goale - what's one thing you must accomplish to make today a success?",
        "Motion creates emotion - get up off your butt and make things happen",
        "Keep learning - learners are earners",
        "Hang out with superstars - misery loves company; winners hang out with superstars",
        "Reward yourself - when you reach your goals, acknowledge your win and reward yourself"
      ]
    };
  }

  generateProducForm() {
    return (
      <div>
        <p>Nume produs</p>
        <input />
        <p>Prt produs</p>
        <input />
      </div>
    );
  } 

  render() {
    return (
    <div className="layout">
      <div className="content">
        <Header className="header"/>
        <Menu 
          list={this.data.list}
          title={this.data.motivation}
          ways={this.data.ways}
          motivation={this.data.motivationExperience}
        />
      </div>
        
      <Footer className="footer"/>

      {/* <Modal title="Create user" generateContent={this.generateProducForm}>
        { // var cu apel de functie // varianta element
        // cand avem lucruri simplemergem pe variante fara fn
        // daca avem componenta care are nevoie de date dintr-o alta
        // componenta folosim ()
          (arg) => {
            return <div>
              <p>{arg}</p>
              <input />
    
              <p>Last Name</p>
              <input />
            </div>
          }
        }
      </Modal> */}
      </div>
    );
  }

  getUserForm() {
    return (
      <div>
        <p> First Name </p>
        <input />
      </div>
    );
  }

  changeComponent() {
    this.setState({
      firstComponent: !this.state.firstComponent
    });
  }
}

export default App;
