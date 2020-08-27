import React, { Component } from 'react';
import pic from './../../assets/images/pickup.jpeg';
import './seller3.css';
class Seller3 extends Component {
    render() {
        return (
            <div className="Seller3">
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
                    <img src={pic} alt={"picc"} width="510vw" height="500vh" /><br/>
                    </div>
                    <div className="bt">
                    <button id="bt">REGISTER HERE </button>
                    </div>
                
            </div>
        );
    }
}
export default Seller3;