import React, { Component } from 'react';
import './Who.css'

class Who extends Component{
    render(){
        return(
            <div className="info" id="Quienes">
                <p>¿Quienes Somos?</p>
                <h2>"Somos por Amor a México" </h2>
                <h4>¡Hola! Es un gusto que te hayas interesado en nuestras raíces. Antes que nada, es necesario contarte que todo 
                    empezó con el concurso <a href="http://www.amartemx.com/" target="_blank" rel="noopener noreferrer"> AmarteMX</a> creado por MVS Radio y apoyado por el programa <em>A Todo Terreno</em> con Pamela Cerdeira.
                </h4>
                <h4>Nuestra escuela invitó a diversos alumnos a participar para representarla y, por amor a México, 10 alumnos decidieron enrolarse dedicando una semana a 
                    trabajar con una comunidad ubicada en Los Altos de Chiapas, llamada Navil.    
                </h4>
                <h4>
                    El concurso incorporó cualidades de diseño y emprendimiento social. Gracias al increíble trabajo del área de comunicación, 
                    nuestro equipo logró obtener el primer lugar en el concurso transversal realizado por el IMJUVE que premiaba al conjunto con la mejor manera de comunicar su experiencia en el concurso. 
                <br />
                <br />
                    Al día de hoy, Navil Mx es la continuación de ese proyecto que busca apoyar a 
                    nuestro amado México y mezclar las tradiciones ya casi olvidadas con las necesidades del público mexicano actual. Nosotros queremos seguir comunicándote todo lo que hacemos para que formes parte de este proyecto y queremos que quedes tan enamorado de él que decidas convertirte en el oyente de estas asombrosas historias que se viven en Chiapas.
                </h4>
                <br />
                <h4>
                    <span style={{fontWeight: "bold"}}>Misión</span><br /> Crear como conjunto una fuente de ingreso para las narradoras con las que trabajamos y desarrollar un producto que ensalce las tradiciones indígenas mexicanas que abrace la actualidad. Porque creemos que trabajando juntos podemos llegar más lejos. 
                    <br />
                    <br />
                    <span style={{fontWeight: "bold"}}>Visión</span> <br />Para 2022, vamos a trabajar junto a 4 nuevas comunidades y abriremos nuestro primer taller de costura donde se impartirán clases para que toda la comunidad se involucre y pueda generar ingresos propios.

                </h4>
            </div>

        );
    }
}
export default Who;