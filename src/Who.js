import React, { Component } from 'react';
import './Who.css'

class Who extends Component{
    render(){
        return(
            <div className="info" id="Quienes">
                <p>¿Quienes Somos?</p>
                <h2>"Siendo lo mejor de nuestro pais" </h2>
                <h4>¡Hola! Es un gusto que te hayas interesado en nuestras raíces. 
                    Antes que nada es necesario contarte que todo empezó con el concurso AmarteMX (da click para saber más) creado por MVS Radio y apoyado por 
                    el programa A todo terreno con Pamela Cerdeira.
                </h4>
                <h4>Nuestra escuela invitó a diversos alumnos a participara para representarla y por amor a México 10 alumnos 
                    decidieron enrolarse para dedicar una semana a trabajar con una comunidad ubicada en Los Altos de Chiapas llamada Navil. 
                    Sí, es como lo estás pensando, de ahí surge nuestro nombre.
                </h4>
                <h4>
                    El concurso incorporó cualidades de diseño y emprendimiento social. Nuestro equipo, gracias al increíble trabajo del área de comunicación, 
                    logró el primer lugar en el concurso transversal realizado por el IMJuve que premiaba al conjunto con la mejor manera de comunicar lo vivido. 
                <br />
                <br />
                    Al día de hoy, Navil MX es la continuación de ese proyecto que busca apoyar a nuestro amado México y mezclar las tradiciones ya casi olvidadas 
                    con las necesidades del público mexicano actual. Al día de hoy, queremos seguir comunicándote todo lo que hacemos para que formes parte de este 
                    proyecto.
                </h4>
                <h4>
                    <span style={{fontWeight: "bold"}}>Misión:</span> Crear en conjunto una fuente de ingreso para las comunidades con las que trabajamos para desarrollar un producto que ensalce las tradiciones indígenas mexicanas y abrace la actualidad. Porque creemos que trabajando juntos podemos llegar más lejos. 
                    <br />
                    <br />
                    <span style={{fontWeight: "bold"}}>Visión:</span> Para 2020, vamos a trabajar junto a 4 nuevas comunidades y abriremos nuestro primer taller de costura donde se impartirán clases para que toda la comunidad se involucre y pueda generar ingresos propios.

                </h4>
            </div>

        );
    }
}
export default Who;