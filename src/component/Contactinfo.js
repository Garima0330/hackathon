import React, { Component } from 'react';
import './form.css';


export class Contactinfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { handleChange, firstname, lastname, username, phoneno, email, password } = this.props;
        return (
            <div>
                <div className="box">
                    <h2><u><b>Enter your contact details</b></u></h2>

                    <label>
                        <input className="firstname"
                            type='text'
                            name='firstname'
                            placeholder="Firstname"
                            value={firstname}
                            onChange={handleChange('firstname')}
                        />
                    </label>
                    <br />
                    <label>
                        <input className="lastname"
                            type='text'
                            name='lastname'
                            placeholder="Lastname"
                            value={lastname}
                            onChange={handleChange('lastname')}
                        />
                    </label>
                    <br />
                    <label>
                        <input className="username"
                            type='text'
                            name='username'
                            placeholder="Username"
                            value={username}
                            onChange={handleChange('username')}
                        />
                    </label>
                    <br />
                    <label>
                        <input className="phoneno"
                            type='text'
                            name='phoneno'
                            placeholder="Phone No."
                            value={phoneno}
                            onChange={handleChange('phoneno')}
                        />
                    </label>
                    <br />
                    <label>
                        <input className="email"
                            type='text'
                            name='email'
                            placeholder="Email"
                            value={email}
                            onChange={handleChange('email')}
                        />

                    </label>
                    <br />
                    <label>
                        <input className="password"
                            type='password'
                            name='password'
                            placeholder="Password"
                            value={password}
                            onChange={handleChange('password')}
                        />

                    </label>
                    <br />
                    <button className="next" onClick={this.continue}>
                        Continue</button>

                </div>
            </div>
        );
    }
}
export default Contactinfo;