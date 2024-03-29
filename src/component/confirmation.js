import React, { Component } from 'react';
import './form.css';

class Confirmation extends Component {

    render() {
        return (
            <div className="text-center form-card">
            <div className="box">
            <h3>Account Createed Successfully!</h3><br/><br/>
                <h3>Thank you for registering :)</h3><br/><br/>
                <p>You will now receive a confirmation email, please click the link in this email to activate your account. If you can't find the activation email, please check your <strong>JUNK</strong> folder.</p><br/>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Click here to resend activation email</a>
            </div>
            </div>
        )
    }
}

export default Confirmation;