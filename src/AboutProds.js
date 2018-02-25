import React, { Component } from 'react';
import './AboutProds.css'


class AboutProds extends Component {
    render(){
        return(
            <div className="About" id="Info">
                <div className ="AboutImage">
                    <h2>Curabitur sit amet est vitae risus rhoncus posuere vel quis justo.</h2>
                </div>
                <div>
                    <h1>Morbi non ultrices libero</h1>
                </div>
                <div className="grid_2">
                    <div className="info1">
                        <i className="fas fa-gift fa-5x"></i>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet nibh id purus vulputate, 
                            a sagittis dui elementum. 
                            Praesent feugiat felis at lectus facilisis, id iaculis eros posuere. In ex.</p>
                    </div>
                    <div className="info2">
                        <i className="fas fa-leaf fa-5x"></i>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet nibh id purus vulputate, 
                            a sagittis dui elementum. 
                            Praesent feugiat felis at lectus facilisis, id iaculis eros posuere. In ex.</p>
                    </div>
                    <div className="info3">
                        <i className="far fa-handshake fa-5x"></i>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet nibh id purus vulputate, 
                            a sagittis dui elementum. 
                            Praesent feugiat felis at lectus facilisis, id iaculis eros posuere. In ex.</p>
                    </div>
                    <div className="info4">
                        <i className="fab fa-accessible-icon fa-5x"></i>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet nibh id purus vulputate, 
                            a sagittis dui elementum. 
                            Praesent feugiat felis at lectus facilisis, id iaculis eros posuere. In ex.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutProds;