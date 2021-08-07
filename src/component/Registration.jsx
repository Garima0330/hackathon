import React, { Component } from 'react';
import Home from './Home';
import Contactinfo from './Contactinfo';
import Sellerinfo from './sellerinfo';
import Taxdetails from './taxdetails';
import Confirmation from './confirmation';


export class Register extends Component {
    state = {
        step: 1,
        //step2
        firstname: '',
        lastname: '',
        username:'',
        phoneno: '',
        email: '',
        emailError:'mail is empty',
        password: '',
        paaswordError:'',
        //step 3
        storename: '',
        address1: '',
        address2: '',
        pincode: '',
        city: '',
        state: '',
        country: '',
        //step4
        gst: '',
        tax: '',
        gstin: '',
        pan: ''

    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });

    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    //handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    showStep = () => {
        const { step, firstname, lastname, phoneno, email, password,storename, address1, address2, pincode, city, state, country, gst, tax, gstin, pan } = this.state;
        if (step === 1)
            return (<Home
                handleChange={this.handleChange}
                nextStep={this.nextStep}
               
                 />);
        if (step === 2)
            return (<Contactinfo
                handleChange={this.handleChange}
                nextStep={this.nextStep}
                firstname={firstname}
                lastname={lastname}
                phoneno={phoneno}
                email={email}
                password={password}
                /*emailError={emailError}
                passwordError={passwordError}*/

            />);
        if (step === 3)
            return (<Sellerinfo
                handleChange={this.handleChange}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                storename={storename}
                address1={address1}
                address2={address2}
                pincode={pincode}
                city={city}
                state={state}
                country={country}

            />);
        if (step === 4)
            return (<Taxdetails
                handleChange={this.handleChange}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                gst={gst}
                tax={tax}
                gstin={gstin}
                pan={pan}
            />);
        if (step === 5)
            return (
                <Confirmation
                    prevStep={this.prevStep}
                />
            )
    }


    render() {
        const { step } = this.state;
        return (
            <div>
                
                {this.showStep()}
            </div>
        )


    }
}
export default Register;