import React, { Component } from 'react';
import './contact.css';
class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <footer>
                    <div id="box">
                        <h3> #JOINO'PICKUP</h3>
                        <h3 id="icon" text-align="center" > CONTACT US :)</h3>
                        <p>pics</p>
                        <ul>
                            <li> My Account</li>
                            <li> Items</li>
                            <li> Locator</li>
                        </ul>
                        <div className="last">
                            
                            TERMS AND CONDITION | PRIVACY POLICY
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Contact;