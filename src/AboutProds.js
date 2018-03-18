import React, { Component } from 'react';
import './AboutProds.css'


class AboutProds extends Component {
    render(){
        return(
            <div className="About" id="Info">
                <div className ="AboutImage">
                    <h2>Integrando lo tradicional en tu día a día.</h2>
                </div>
                <div>
                    <h1>Acerca de Nuestros Productos</h1>
                </div>
                <div className="grid_2">
                    <div className="info1">
                        <i className="fas fa-gift fa-5x"></i>
                        <h3>Materiales</h3>
                        <p>Los materiales con los que trabajamos son hechos 100% mexicanos con la más alta calidad. 
                            Utilizamos hilos y telas que nos ayudan a entregarte un producto durable y bien hecho.</p>
                    </div>
                    <div className="info2">
                        <i className="fas fa-leaf fa-5x"></i>
                        <h3>Diseño y significado</h3>
                        <p>Los diseños que presentamos tienen un significado distinto y representan la piel de ciertos animales o de la naturaleza. 
                            Cada producto incluye una explicación a detalle de lo que el bordado significa.</p>
                    </div>
                    <div className="info3">
                        <i className="far fa-handshake fa-5x"></i>
                        <h3>Trabajo entre iguales</h3>
                        <p>Olvidemos la idea del hombre blanco que viene a colonizar, nosotros somos mexicanos que quieren conocer sus raíces. 
                            Para trabajar con nuestra comunidad nosotros les pedimos que actúen como nuestras maestras porque sabemos que ambos podemos aportar al otro.</p>
                    </div>
                    <div className="info4">
                        <i className="fab fa-accessible-icon fa-5x"></i>
                        <h3>Trabajo con la comunidad</h3>
                        <p>Creemos que es necesario integrar las tradiciones autóctonas mexicanas con productos novedosos, es por eso que trabajamos 
                        con nuestra comunidad aceptando toda la retroalimentación sobre los productos que podamos tener para poder reflejar de mejor manera esas tradiciones.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutProds;