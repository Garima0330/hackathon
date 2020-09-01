import React, { Component } from 'react';
import Contact from './../Menu/contact';
import shop1 from '../../assets/images/shop1.jpg';
import shop2 from '../../assets/images/shop2.jpeg';
import shop3 from '../../assets/images/shop3.jpeg';
import Shop4 from '../../assets/images/shop4.jpeg';
import shop5 from '../../assets/images/shop5.jpeg';
//import shop6 from '../../assets/images/sample.jpeg';
import './shopdisplay.css';
import Page from './pagination';
class Shopdisplay extends Component {
    render() {
        return (
            <div className="main">
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
                <div className="row">
                    <div className="left">
                        <img src={shop1} alt={"pic"} />
                        <p> <b>KELASH KIRANA</b>,Near Malviudhyan,Kotdwar</p>
                    </div>
                    <div className="right">
                        <img src={shop2} alt={"pic"} width="190px" height="147px" />
                        <p> <b>Ibrahi MART</b>,Near Meat Market,Kotdwar</p>
                    </div>
                </div>
                <div className="row left2">
                    <img src={shop5} alt={"pic"} />
                    <p><b> Pinki Kirana </b>,Lower Kalabarh,Kotdwar</p>
                    <b></b>
                </div>
                <div className="row right2">
                    <img src={shop3} alt={"pic"} />
                    <p><b>Sonu Store</b>,Near Govt.School No.4,kotdwar</p>
                </div>
                <div className="row left">
                    <img src={Shop4} alt={"pic"} />
                    <p><b>Apka General Store</b>,Tata Motors ,Kotdwar</p>
                </div>
                <div className="row right">
                    <img src={shop5} alt={"pic"} />
                    <p><b>Sangee Kirana</b>,Near Red Light,kotdwar</p>
                </div>
                <div className="row page">
                <Page />
                </div>
                <div className="row footer">
                <Contact />
                </div>
            </div>
        );
    }
}

export default Shopdisplay;