import React from "react"; // en todos los archivos jsx tiene que estar
import "../hojasDeEstilos/Testimonios.css"; // importar archivo css




export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt={props.alt} />
      <div className="contenedor-texto-testimonio">  
      <p className="nombre-testimonio"> 
      <strong>{props.nombre}</strong> en {props.pais}</p>
      <p className="cargo-testimonio"> {props.cargo} en <strong>{props.empresa} </strong></p>
      <p className="texto-tes timonio">"{props.testimonio1} <strong>{props.negrita}</strong> {props.testimonio2}"</p>
      </div>
    </div>
  );
}
