import React, { Component } from 'react';
import './feedback.css';
class Contact extends Component {
    render() {
        return (
            <div className="feedback">
             <div className="left"> 
             </div>
              <div className="right">
              <form id="form">
              <fieldset class="stars">
                <input type="radio" name="stars" id="star1" ontouchstart="ontouchstart"/>
                <label class="fa fa-star" for="star1"></label>
                <input type="radio" name="stars" id="star2" ontouchstart="ontouchstart"/>
                <label class="fa fa-star" for="star2"></label>
                <input type="radio" name="stars" id="star3" ontouchstart="ontouchstart"/>
                <label class="fa fa-star" for="star3"></label>
                <input type="radio" name="stars" id="star4" ontouchstart="ontouchstart"/>
                <label class="fa fa-star" for="star4"></label>
                <input type="radio" name="stars" id="star5" ontouchstart="ontouchstart"/>
                <label class="fa fa-star" for="star5"></label>
                <input type="radio" name="stars" id="star-reset"/>
                <label class="reset" for="star-reset">reset</label>
                <figure class="face"><i></i><i></i>
                  <u>
                    <div class="cover"></div>
                  </u>
                </figure>
              </fieldset>
            </form>
              </div>

            </div>
        );
    }
}
export default feedback;