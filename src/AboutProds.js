import React, { Component } from 'react';
import './AboutProds.css'


class AboutProds extends Component {
    render(){
        return(
            <div className="About" id="Info">
                <div className ="AboutImage">
                    <h2>Cultura plasmada en el bordado</h2>
                </div>
                <div>
                    <h1>Acerca de Nuestros Productos</h1>
                </div>
                <div className="grid_2">
                    <div className="info1">
                        <i className="far fa-edit fa-5x"></i>
                        <h3>Materiales</h3>
                        <p>Los materiales con los que trabajamos son 100% mexicanos, hechos con la más alta calidad. Utilizamos hilos y telas que nos ayudan a entregarte un producto que superará tus expectativas.</p>
                    </div>
                    <div className="info2">
                        <i className="far fa-envelope-open fa-5x"></i>
                        <h3>Diseño y significado</h3>
                        <p>Los diseños que presentamos tienen un significado único como representar la piel de los animales o plasmar la belleza de la naturaleza. Cada producto incluye una explicación a detalle de lo que el bordado significa para las artesanas.</p>
                    </div>
                    <div className="info3">
                        <i className="far fa-handshake fa-5x"></i>
                        <h3>Trabajo entre iguales</h3>
                        <p>Al llegar a cada comunidad procuramos que el proyecto beneficie a sus colaboradores tratandolos como socios. Se respetan sus tradiciones y métodos de trabajo así como también se escuchan sus opiniones y consejos. Con esa confianza somos capaces de pedirles un trabajo que nos beneficie a ambos.</p>
                    </div>
                    <div className="info4">
                        <i className="fas fa-street-view fa-5x"></i>
                        <h3>Trabajo con la comunidad</h3>
                        <p>Creemos que es necesario integrar las tradiciones autóctonas mexicanas con productos novedosos, es por eso que trabajamos con diversas comunidades aceptando toda la retroalimentación para poder reflejar de mejor manera esas tradiciones. Así mismo, se procura que el proyecto mejore en 5 años las condiciones de vida de nuestras narradoras al nivel que ellas lo soliciten.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutProds;