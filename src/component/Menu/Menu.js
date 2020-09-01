import React, { Component } from 'react';
import Img from '../../assets/images/logo.jpeg';
import Contact from './contact';
import Button from './button';
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
                        <li> FEEDBACK</li>
                        <li> CONTACT</li>
                        <li> ABOUT</li>
                        <li> HOME</li>
                    </ul>
                </section>
                <div className="main">
                <div className="column">
                    <img src={Img} alt={"backgroundimage"} width="120%" height="500px"/>
                </div>
                <div className="column right">
                   <Button/>
                </div>
                </div>
                <div className="footer">
                    <Contact />
                </div>
            </div>
        );
    }
}
export default Menu;