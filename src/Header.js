import React, { Component } from 'react';
import logo from "./Images/Icono_rojo.png"
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div className ="Header" id="Inicio">
                <div className = "navbar">
                    <ul>
                        <li className="mini">< a href='#Inicio'><img src={logo} height="<45></45>" width="60" alt=""/>
                        </a></li>
                        <li>< a href='#Inicio'>Inicio</a></li>
                        <li>< a href='#Productos'>Narradores</a></li>
                        <li>< a href='#Info'>Acerca de</a></li>
                        <li>< a href='#Quienes'>Quienes Somos</a></li>
                        <li>< a href='#Contact'>Contacto</a></li>
                    </ul>
                </div>
                <img className="logo" src={logo} height="475" width="650" alt=""/>
            </div>
        )
    }
}

export default Header;