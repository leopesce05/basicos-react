import React from "react";
import PropTypes from "prop-types";

function Propiedades(props) {
    return (
        <div>
            <h2>Las Props</h2>
            <p>{props.cadena}</p>
            <p>{props.numero}</p>
            <p>{props.booleano ? "Verdadero":"falso"}</p>
            <p>{props.arreglo}</p>
            <p>{props.objeto.nombre}</p>
            <p>{props.objeto.correo}</p>
            <p>{props.arreglo.map(props.funcion).join(", ")}</p>
            <p>{props.elementoReact}</p>
            <p>{props.componenteReact}</p>
        </div>
    );
}

export default Propiedades;

Propiedades.defaultProps = {
    porDefecto: "Las Props",
}

Propiedades.propTypes={
    numero: PropTypes.number.isRequired

}