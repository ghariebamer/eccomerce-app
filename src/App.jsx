import {Component} from "react";
import React from "react";
import NavBar from "./NavBar";
//import CoustmerList from "./customerslist"; 
import ShoppingCart from "./shoppingCart";
export default class App extends Component{
    render(){
        return(
            <React.Fragment> 
                <NavBar></NavBar>
                <ShoppingCart></ShoppingCart>
            </React.Fragment>
        )
      
    }
}
