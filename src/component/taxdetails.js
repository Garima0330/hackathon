import React, { Component } from 'react';
import './form.css';


export class Taxdetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { handleChange, gst, pan, gstin, tax } = this.props;
        return (
            <div>
            <div className="box">
                <h2><u><b>Enter your Tax details</b></u></h2>
                <label>
                    <input className="gst"
                        type='text'
                        name='gst'
                        placeholder="GST No."
                        value={gst}
                        onChange={handleChange('gst')}
                    />
                </label>
                <br />

                <label>
                    <input className="tax"
                        type='text'
                        name='tax'
                        placeholder="Enter tax details"
                        value={tax}
                        onChange={handleChange('tax')}
                    />
                </label>
                <br />
                <label>
                    <input className="gstin"
                        type='text'
                        name='gstin'
                        placeholder="Provisional GSTIN No."
                        value={gstin}
                        onChange={handleChange('gst')}
                    />
                </label>
                <br />
                <label>
                    <input id="pan"
                        type='text'
                        name='pan'
                        placeholder="PAN No."
                        value={pan}
                        onChange={handleChange('pan')}
                    />
                </label>
                <br />

                <button className="prev" onClick={this.prev}>
                    Prev</button>
                
                <button className="next" onClick={this.continue}>
                    Submit</button>
            </div>
            </div>

        );
    }
}
export default Taxdetails;