import React, { Component } from 'react';
import stry from './../../assets/images/shop1.jpg';
import mission from './../../assets/images/mission.jpeg';
import goal from './../../assets/images/goal.jpeg';
import Contact from './contact';
import './about.css';
class About extends Component {
    render() {
        return (
            <div className="About">
                <section>
                    <div className="wave wave1"></div>
                    <div className=" wave wave2"></div>
                    <div className=" wave wave3"></div>
                    <div className="nav">
                    <ul>
                    <li> HOME</li>
                    <li> ABOUT</li>
                    <li> CONTACT</li>
                    <li> FEEDBACK</li>
                    </ul>
                    </div>
                </section>
                <span style ={{textAlign :'center'}} ><h2>ABOUT US:)</h2></span>
                <div id="mainbox">
                    <div id="subbox">
                        <div className="innerbox-1">
                            <div className="inner">
                                <h2> OUR STORY</h2> <br />
                                <p>  Spare more with  O'PICKUP!.. During this pandameic situation we got up an idea  to bring all local groceryshops and buyers  together and give them a plattform to sell and buy grocery.</p>
                                </div>
                            <div className="inner">
                            <img src={stry} alt={"stry"} width="70%" height="90%"/>
                            </div>
                        </div>

                        <div className="innerbox-2">
                            <div className="inner">
                                <img src={mission} alt={"mission"} width="70%" height="80%"/>
                                
                            </div>
                            <div className="inner">
                            <h2> OUR MISSION</h2> <br />
                                <p>  We give you the most minimal costs on the entirety of your grocery needs. O'PICKUP is a low-cost online general store that gets items crosswise over classifications like grocery and natural products conveyed to your doorstep.</p> 
                            </div>
                        </div>

                        <div className="innerbox-3">
                            <div className="inner">
                                <h2> OUR GOAL</h2> <br />
                                <p> We ensure that your time will be saved and you will receive best quality! Our main aim is to direct contact between seller and buyer no third party interfere.</p>
                            </div>
                            <div className="inner">
                               <img src ={goal} alt={"goal"} width="70%" height="60%"/>
                        </div>
                        </div>
                    </div>
                </div>
                <footer><Contact/></footer>
            </div>
        );
    }
}
export default About;