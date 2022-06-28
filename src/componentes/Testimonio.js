import React from 'react';
import '../css/Testimonios.css';

function Testimonio(props){
    return (
        <div className='contenedor-testimonios'>
            <img className='imagen-testimonio'
            src={require(`../imagenes/testimonio_${props.foto}.png` )}
            alt="Imagen"/>

            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.name} en {props.country}</p>    
                <p className='cargo-testimonio'>{props.cargo} cargo {props.empresa}</p>    
                <p className='texto-testimonio'>{props.testimonio}</p>     
            </div>
        </div>
    );
}
export default Testimonio;