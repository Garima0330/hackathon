import React, { Component } from 'react';
import Img from '../../assets/images/logo.jpeg';
import seller from '../../assets/images/sellerbtn.png';
import buyer from '../../assets/images/buyer.png';
import Contact from './contact';
import './menu.css';
class Menu extends Component {
    render() {
        return (
            <div className="header">
                <section>
                
                    <div className="wave wave1"></div>
                    <div className=" wave wave2"></div>
                    <div className=" wave wave3"></div>

                    <ul>
                    <li> HOME</li>
                    <li> ABOUT</li>
                    <li> CONTACT-US</li>
                    <li> FEEDBACK</li>
                    </ul>
                </section>
                <img id="pic" src={Img} alt="backgroundimage" />
                <a href="/seller"><img id="btn1" src={seller} alt="btn" /></a>
                <a href="/buyer"><img id="btn2" src={buyer} alt="button" /></a>
                     <Contact/>
            </div>
        );
    }
}
export default Menu;