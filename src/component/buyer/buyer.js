import React, { Component } from 'react';
import './buyermain.css';
class Buyer extends Component {
    render() {
        return (
            <div className="buyer">
                <div className="bind">
                    <div className="space">
                        <div id="btn">
                            <p> SIGN-IN </p>
                        </div>
                    </div>
                    <div className="space2">
                        <div id="btn">
                            <p>SIGN-UP</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};
export default Buyer;