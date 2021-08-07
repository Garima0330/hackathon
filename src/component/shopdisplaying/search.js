import React from 'react';

function SearchBox(props){
    
    return (
    <div style={{textAlign:'center'}}> 
    <input onChange={props.handleInput} type="text"/>
    </div>
    )
}
export default SearchBox ;