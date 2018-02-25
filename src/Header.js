import React, { Component } from 'react';
import logo from "./Images/Icono_rojo.png"
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div className ="Header" id="Inicio">
                <div className = "navbar">
                    <ul>
                        <li>< a href='#Inicio'>Inicio</a></li>
                        <li>< a href='#Quienes'>Quienes Somos</a></li>
                        <li>< a href='#Productos'>Ellos</a></li>
                        <li>< a href='#Info'>Acerca</a></li>
                        <li>< a href='#Contact'>Contacto</a></li>
                    </ul>
                </div>
                <img src={logo} height="475" width="650"/>
            </div>
        )
    }
}

export default Header;