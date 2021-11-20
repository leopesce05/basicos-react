import React from 'react';

export class EventosES6 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            contador:0,
        }
        this.restar = this.restar.bind(this);
        this.sumar = this.sumar.bind(this);
    }

    sumar(e){
        console.log("SUMANDO")
        this.setState({
            contador:this.state.contador + 1
        })
    }
    
    restar(e){
        console.log("RESTANDO")
        this.setState({
            contador:this.state.contador -1
        })
    }

    render() { 
        return ( 
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>Contador: {this.state.contador}</h3>
            </div>
         );
    }
}

//Properties Initializer 
export class EventosES7 extends React.Component {

    //SIN CONSTRUCTOR
    state = { 
        contador:0,
    }

    //ARROW FUNCTIONS
    sumar = (e) => {
        console.log(this)
        this.setState({
            contador:this.state.contador + 1
        })
    }
    
    restar = (e) => {
        console.log(this)
        this.setState({
            contador:this.state.contador -1
        })
    }

    render() { 
        return ( 
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>Contador: {this.state.contador}</h3>
            </div>
         );
    }
}

// function Boton(props) {
//     return(
//         <button onClick={props.myOnClick}>Boton hecho componente</button>
//     )
// }

const Boton = (props) => (
    <button onClick={props.myOnClick}>Boton hecho componente</button>
)

export class MasSobreEventos extends React.Component{


    handleClick = (e,mensaje) => {
        //Renderiza el mensaje en un p
        const texto = document.getElementById('pepito');
        texto.innerHTML= mensaje;
        console.log(e)
        console.log(e.target)
        console.log(e.nativeEvent)
        console.log(e.nativeEvent.target)
        console.log(mensaje)
    }
    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <p id='pepito'></p>

                <button onClick={(e) => this.handleClick(e,"Hola, pasando parametro desde un evento")}>Saludar</button>
                
                {/*Evento Personalizado , Desde otro archivo ejecutar funcion de otra*/}
                <Boton myOnClick={(e) => this.handleClick(e,"Hola, pasando parametro desde un evento personalizado")}/>          
            </div>
        )
    }
}
 
