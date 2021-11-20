import React from "react";

class Reloj extends React.Component{

    
 

    componentWillUnmount(){
        console.log(3,"El componente ah sido eliminado del DOM")
    }

    render(){
        return(
            <h3>{this.props.hora}</h3>
        )
    }

}

export default class CicloDeVida extends React.Component {

    constructor(props){
        super(props)

        console.log(0,"El componente se inicializa, aun no esta en el DOM")
        
        this.state = {
            visible:false,
            hora:new Date().toLocaleTimeString()
        }

        this.temporizador = null;
    }

    componentDidMount(){
        console.log(1,"El componente ya se encuentra en el DOM")
    }

    componentDidUpdate(prevProps,prevState){
        console.log(2,"El estado o las props del componente han cambiado")
        console.log(prevProps)
        console.log(prevState)
    }

    componentWillUnmount(){
        console.log(3,"El componente ah sido eliminado del DOM")
    }

    tictac = () =>{
        this.temporizador = setInterval(()=>{
            this.setState({
                hora:new Date().toLocaleTimeString()
            })
        },1000)
    }

    iniciar = () => {
        this.tictac();
        this.setState({
            visible:true
        })
    }

    
    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible:false
        })
    }

    render() {
        console.log(4,"El componente se dibuja (o redibujo) en el DOM")
        return (
            <>
                <h2>Ciclo de Vida</h2>
                {this.state.visible && <Reloj hora={this.state.hora} />}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        );
    }

}
