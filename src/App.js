import React, {useEffect} from 'react';
import Shopdisplay from './component/shopdisplaying/shopdisplay';
import Seller3 from './component/seller/seller3';
import About from './component/Menu/about';
import Buyer from './component/buyer/buyer';
import Seller from './component/seller/seller';
import Seller2 from './component/seller/seller2';
import Confirm from './component/confirm/confirm';
import Shop from './component/shopdisplaying/shop';
import List from './component/shopdisplaying/list';
import Search from './component/shopdisplaying/search';
import Page from './component/shopdisplaying/pagination';
import { Button } from '@material-ui/core';
import Contact from './component/Menu/contact';
//import Registration from './components/Registration';
//import SignupUser from './components/SignupUser/UserForm'
//import { UserForm } from './components/SignupUser/UserForm';
//import Shoplist from './components/todolist';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from './component/Menu/Menu';
export const UserContext = createContext()


// const Routing = ()=>{
//   const {state,dispatch} = useContext(UserContext)
//   useEffect(()=>{
//     const user = JSON.parse(localStorage.getItem("user"))
//     if(user){
//       dispatch({type:"USER",payload:user})
//     }
//   },[])
class App extends Component {
  render() {
    return (
      <div className="app">
      <Menu/>
      </div>
       
    );
}
export default App;
