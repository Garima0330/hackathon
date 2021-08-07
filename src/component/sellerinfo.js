import React ,{Component} from 'react';

import './form.css';


export class Sellerinfo extends Component{
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    prev=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
     render(){
        const {handleChange,storename,address1,address2,pincode}=this.props;
        return(
            <div>
            <div className="box">
               <h2><u><b>Enter your Seller details</b></u></h2>
               <label>
               <input className="storename"
               type='text' 
                name='storename'
                placeholder="Storename" 
                value={storename}
                 onChange={handleChange('storename')}
                 />
               </label>
               <br/>
               <h2><u><b>Location Details</b></u></h2>
               <br/>
               <label>
               <input className="address1"
               type='text' 
                name='address1'
                placeholder="Address Line 1" 
                value={address1}
                 onChange={handleChange('address1')}
                 />
               </label>
               <br/>
               <label>
               <input className="address2"
               type='text' 
                name='address2'
                placeholder="Address Line 2" 
                value={address2}
                 onChange={handleChange('address2')}
                 />
               </label>
               <br/>
               <label>
               <select className="list">
               <option selected  value="Kotdwara">Kotdwara</option>
               <option   value="Khatima">Khatima</option>
               <option  value="Kashipur">Kashipur</option>
               <option   value="Pauri">Pauri</option>
               
               </select>
               </label>
               <br/>
               <label>
               <input className="pincode"
               type='text' 
                name='pincode'
                placeholder="Pincode" 
                value={pincode}
                 onChange={handleChange('pincode')}
                 />
               </label>
               <br/>
               <label>
               <select className="list">
               <option selected  value="Uttarakhand">Uttarakhand</option>
               <option   value="Uttarpradesh">UttarPradesh</option>
               <option  value="Punjab">Punjab</option>
               <option   value="HimachalPradesh">Himachal Pradesh</option>
               
               </select>
               </label>
               <br/>
            
              
               <button className="prev" onClick={this.prev}>
               Prev</button>
            
               <button className="next" onClick={this.continue}>
               Continue</button>
                </div>
          </div>
       );
     }
}
export default Sellerinfo;