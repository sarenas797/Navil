import React, { Component } from 'react';
import logo from "./Images/Icono_rojo.png"
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div className ="Header"> 
            <h1>Navil</h1>
            <img src={logo} height="500" width="650"/>
            </div>
        )
    }
}

export default Header;