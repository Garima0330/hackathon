import React, { Component } from 'react';
import pic from '../assests/images/pickup.jpeg';
import './Home.css';

import Footer from './Menu/contact'

class Home extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
}
  render() {

    return (
      <div className="home">

      <section>
          <div className="wave wave1"></div>
          <div className=" wave wave2"></div>
          <div className=" wave wave3"></div>
          <div className="nav">
          <ul>
          <li>FEEDBACK</li>
          <li> CONTACT</li>
          <li> ABOUT </li>
          <li> HOME</li>
          </ul>
          </div>
          <h2 id="blink"> WHY  SELL HERE ?</h2>
      </section>
          <div className="article">
          <img id="pic" src={pic} alt={"picc"} width="510vw" height="500vh" /><br/>
          </div>
        <div>
          <button id="button" onClick={this.continue} >Register Now!!</button>
          
        </div>
        <Footer/>
      </div>
    );
  }

}
export default Home;