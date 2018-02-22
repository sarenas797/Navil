import React, { Component } from 'react';
import logo from "./Images/Icono_rojo.png"
import logo_2 from './Images/Icono_blanco.png'
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div className ="Header">
                <div className = "navbar">
                    <ul>
                        <li><img src ={logo_2 }height="50" width="75" /></li>
                        <li>< a href='#Quienes'>Ullamcorper</a></li>
                        <li>< a href='#Products'>Eleifend</a></li>
                        <li>< a href='#About'>Elementum</a></li>
                        <li>< a href=''>Aliquam</a></li>
                        <li>< a href=''>Praesent</a></li>
                    </ul>
                </div>
                <h1>Navil</h1>
                <img src={logo} height="475" width="650"/>
            </div>
        )
    }
}

export default Header;