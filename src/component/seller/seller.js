import React, { Component } from 'react';
import './seller.css';
import Seller2 from '../seller/seller2';

class Seller extends Component {
    render() {
        return (
            <div className="seller" >
                <div className="right">
                </div>
                <div className="left">
                  <Seller2/>
                </div>
            </div>
        );
    }
}
export default Seller;