import React from 'react';
import shop6 from '../../assets/images/sample.jpeg';
function Shop(props) {
    return (
        <div className="parent">
            <div className="row">
                <div className="left">
                    <img src={shop6} alt={"pic"} />
                    <p>ShopName : {props.name}</p>
                    <p>Address : {props.address}</p>
                </div>
                </div>
        </div>
    )
}
export default Shop;