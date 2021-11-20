import React from 'react';

export default class Padre extends React.Component {

    state = {
        contador:0,

    }

    incrementar =()=>{
        this.setState({
            contador:this.state.contador + 1
        })
    }

    render() { 
        return (
        <div>
            <h2>Comunicacion entre componentes</h2>
            <p>Contador {this.state.contador}</p>
            <Hijo incrementarContador={this.incrementar} mensaje="Mensaje para el hijo numero 1"/>
            <Hijo incrementarContador={this.incrementar} mensaje="Mensaje para el hijo numero 2"/>
        </div>
        )
    }
}

function Hijo(props) {
    return (
        <>
        <h3>{props.mensaje}</h3>
        <button onClick={props.incrementarContador}>+</button>
        </>
    )
}
