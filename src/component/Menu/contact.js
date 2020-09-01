import React, { Component } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import './contact.css';
class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <footer>
                    <div id="box">
                        <h3> #JOIN O'PICKUP</h3>
                        <h3 id="icon" text-align="center" > CONTACT US :)</h3>
                         <MailOutlineIcon fontSize="large"/>
                         <InstagramIcon fontSize="large"/>
                         <FacebookIcon fontSize="large" />
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