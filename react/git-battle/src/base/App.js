import React, { Component } from 'react';
// import FirstComponent from '../components/firstComponent';
// import PrimaryComponent from '../components/primaryComponent/primaryComponent';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

import '../styles/style.scss';
import './App.scss';

const object = {
  first: "first button",
  second: "second button" 
} 

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: ["1st option", "2nd option", "3rd option"],
      toggle: "Menu"
    }
  }

  render () {
    return (
      // <div className="background">
      //   <p>Button pentru click... </p>
      //   <button className="hai" type="submit">Hai cu click-ul..</button>
      //   <FirstComponent />

      //   <div className="buttons">
      //     <PrimaryComponent type="primary"/>
      //     <PrimaryComponent type="secodary"/>
      //     <PrimaryComponent type="warning"/>
      //   </div>
      // </div> 
      <div className="layout">
        <Header />

        <div className="content">
          <Menu 
            options={this.state.menu}
            menu={this.state.toggle}
          />
          <Main />
        </div>

        <Footer />
      </div>
    )
  }
}


export default App;

