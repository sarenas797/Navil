import React, { Component } from 'react';
import './Social.css'


class Social extends Component{
    render(){
        return(
            <div className="SocialContainer" id="Contact">
                <p>¿Gustas saber más?</p>
                <h4>Contáctanos</h4>
                <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend facilisis lectus, sed lobortis sem. 
                    Nunc varius magna metus, a tempor urna elementum a. Quisque ut ornare leo.  
                </h6>
                <div className = "grid_contacts">
                    <div className="Phone">
                    <i className="fas fa-phone fa-4x"></i> 
                        <h5>Lorem</h5>
                        <p>Nunc sed massa vel erat dictum semper.</p>
                    </div>
                    <div className="Email"> 
                        <i className="far fa-envelope fa-4x"></i>
                        <h5>Lorem</h5>
                        <p>Nunc sed massa vel erat dictum semper.</p>
                    </div>
                    <div className="Address"> 
                        <i className="far fa-compass fa-4x"></i>
                        <h5>Lorem</h5>
                        <p>Nunc sed massa vel erat dictum semper.</p>
                    </div>
                </div>
                <div className="facebook_timeline">
                    <div className="fb-page" data-href="https://www.facebook.com/Navilmex/" 
                    data-tabs="timeline" data-width="275" data-height="450" data-small-header="true" data-adapt-container-width="true" 
                    data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Navilmex/" 
                    className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Navilmex/">Navilmex</a></blockquote>
                    </div>
                </div>
            </div>
        )
    }
}

export default Social;