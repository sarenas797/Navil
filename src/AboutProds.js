import React, { Component } from 'react';
import Gus from './Images/Gus.jpg'
import './AboutProds.css'


class AboutProds extends Component {
    render(){
        return(
            <div className="About">
                <div className ="AboutImage">
                    <img src ={Gus} height="600" width="100%"/>
                    <div className="AboutText">
                        <h1>Et harum quidem rerum facilis est et expedita distinctio.</h1>
                    </div>
                </div>
                <div className="grid_2">
                    <div className="info1">
                        <i className="fas fa-gift fa-5x"></i>
                        <h3>Hoodies</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet nibh id purus vulputate, 
                            a sagittis dui elementum. 
                            Praesent feugiat felis at lectus facilisis, id iaculis eros posuere. In ex.</p>
                    </div>
                    <div className="info2">
                        <h3>Bags</h3>
                    </div>
                    <div className="info3">
                        <h3>Things</h3>
                    </div>
                    <div className="info4">
                        <h3>Things2</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutProds;