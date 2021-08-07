import React from 'react';
import Shop from './shop';
function list(props){
    let dogs = props.filterDogs.map((dog,i) =>{
       return <Shop key={i} name={dog.name} address={dog.address}/>
    })
    return (
    <div>
    {dogs}
    </div>
    )
}
export default list;
