import React, { Component } from 'react';
import Contact from './../Menu/contact';
import SearchBox from './search';
import List from './list';
import './shopdisplay.css';
import Page from './pagination';
class Shopdisplay extends Component {
    constructor(props){
    super(props);
        this.state={
            dogs:[
                {name:'one' ,address:'jhh'},
                {name:'two' ,address:'hdfhd'},
                {name:'three' ,address:'hdfhd'},
                {name:'four' ,address:'hdfhd'},
                {name:'five' ,address:'hdfhd'},
                {name:'six' ,address:'hdfhd'},
                {name:'seven' ,address:'hdfhd'},
                {name:'eight' ,address:'hdfhd'},
                {name:'nine' ,address:'hdfhd'},
                {name:'ten' ,address:'hdfhd'}
            ],
            searchDog:''
        }
    }
    handleInput=(e)=>{
        console.log(e.target.value);
       this.setState({ searchDog:e.target.value})
      }

    render(){
        let filterDogs=this.state.dogs.filter((dog)=>{
            return dog.name.toLowerCase().includes(this.state.searchDog.toLowerCase())
           })
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
                <div className="search">
                <p><b>Search Your Shop</b></p>
                <SearchBox handleInput={this.handleInput} />
                <List filterDogs={filterDogs}/>    
                </div>
                <div className="page">
                    <Page />
                  </div>
                <div className="footer">
                    <Contact />
                </div>
     </div>

        );
    }
}

export default Shopdisplay;