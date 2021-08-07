import React, { Component } from 'react';
import Search from '../shopdisplaying/search';
import Contact from '../Menu/contact';
import banner from './../../assets/images/bo.jpg';
import Capture from './../../assets/images/Capture.PNG';
import second from './../../assets/images/second.PNG';
import third from './../../assets/images/third.PNG';
import grid1 from './../../assets/images/grid1.PNG';
import grid2 from './../../assets/images/grid2.PNG';
import grid3 from './../../assets/images/grid3.PNG';
import buyerbtn from'./../../assets/images/buyerbutton.PNG';
import sellerbtn from './../../assets/images/sellerbtn.png'
import '../Menu/menu.css';
//import { color } from '@material-ui/system';

class Menu extends Component {
    render() {
        return (
            <div className="header">
                <section>
                    <div className="wave wave1"></div>
                    <div className=" wave wave2"></div>
                    <div className=" wave wave3"></div>
                    <div className="menu">
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>CONTACT</li>
                            <li>FEEDBACK</li>
                        </ul>
                    </div>
                </section>
                <div className="buttons">
                <img class="buyer" src={buyerbtn} alt={"banner"} style={{ width:'15%'}}/>
                <img id="seller" src={sellerbtn} alt={"banner"} style={{ width:'15%'}}/>    
                </div>
                <h2 style={{ textAlign: 'center' }}><b>Search Your Product</b></h2>
                <div className="section">
                <Search />
                   
                    <img id="Banner" src={banner} alt={"banner"} />
                    <div className="item">
                        <h2>Our Top Products</h2>
                        <ul>Bread</ul>
                        <hr />
                        <ul>Milk</ul><hr />
                        <ul>Pulses</ul><hr />
                        <ul>Soaps & Detergent</ul><hr />
                        <ul>Oils</ul>
                    </div>
                    </div>
                    <div className="middle-section">
                        <img id="" src={Capture} alt={"banner"} />
                        <img id="" src={second} alt={"banner"} />
                        <img id="" src={third} alt={"banner"} />
                    </div>
                
               
                    <div className="container" aria-hidden="true"/>
                    <div className="Parallax">
                    </div>
                   
                    <div className="article">
                    <h3>Hot Offers</h3><hr  style={{ width:'45vh'}}/>
                    <div className="middle-section">
                        <img id="" src={grid2} alt={"banner"} />
                        <img id="" src={grid1} alt={"banner"} />
                        <img id="" src={grid3} alt={"banner"} />
                    </div>
                    </div>

                <footer>
                    <div className="Note">
                        <ul><h3>Sign up for NewsLetter :)</h3> </ul>
                        <ul> <input type="Text" placeholder="Your id please...!" /></ul>
                        <ul > <button>Subscribe Now</button></ul>
                        </div>
                        <Contact />
                   </footer>
            </div>

        );
    }
}
export default Menu;
