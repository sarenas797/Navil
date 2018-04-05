import React, { Component } from 'react';
import './End.css'
import logo from './Images/Icono_blanco.png'

class End extends Component{
    render(){
        return(
            <div className="end">
                <div className="legal">
                    <img src={logo} width="100" height="80" alt=""/>
                    <h5>Navilmx | All Rights Reserved | 2018</h5>
                </div>
            </div>
        )
    }
}

export default End;