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
                        <h5>Teléfono</h5>
                        <p>Nunc sed massa vel erat dictum semper.</p>
                    </div>
                    <div className="Email"> 
                        <i className="far fa-envelope fa-4x"></i>
                        <h5>Correo</h5>
                        <p>Nunc sed massa vel erat dictum semper.</p>
                    </div>
                    <div className="Address"> 
                        <i className="far fa-compass fa-4x"></i>
                        <h5>Dirección</h5>
                        <p>Nunc sed massa vel erat dictum semper.</p>
                    </div>
                </div>
                <div className="facebook_timeline">
                    <div className="fb-page" data-href="https://www.facebook.com/Navilmex/" 
                        data-tabs="timeline" data-width="300" data-height="450" data-small-header="true" data-adapt-container-width="true" 
                        data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Navilmex/" 
                        className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Navilmex/">Navilmex</a></blockquote>
                    </div>
                </div>
                <iframe className="map" title="face" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.7969419795645!2d-99.23131838572607!3d19.593198240604217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21dc99271d6b1%3A0x1464def1a2c06c02!2sTec+de+Monterrey+CEM!5e0!3m2!1sen!2smx!4v1519598487886" 
                width="100%" height="450"allowFullScreen>
                </iframe>
            </div>
        )
    }
}

export default Social;