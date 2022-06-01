import React from "react";
import '../css/Perfil.css';

// Componente funcional
//Se incluyen propiedades a mi componente funcional con props
function Perfil(props) {
  // Un componente retorna una estructura en JSX
  return (
    <div className="contenedor-perfil">
      <img 
        className="imagen-perfil"
        src={require(`../img/testimonio-${props.imagen}.png`)}
        alt={`imagen de ${props.imagen}`}/>
      <div className="contenedor-texto-perfil">
        <p className="nombre-perfil"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-perfil">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-perfil">"{props.descripcion}"</p>
        {/* <p className="texto-perfil">Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.</p> */}
      </div>
    </div>
  );
}

// El export permite importar en otro archivo este componente funcional
// Existen dos tipos de export
// La exportacion por defecto indica que este va  ahcer el unico componente que se importa
// La exportacion nombrada puede especificar varios archivos.
export default Perfil;