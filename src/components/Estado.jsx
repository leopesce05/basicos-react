import React from 'react';

//funcion de ejemplo para pasaje de estado
function EstadoAHijo(props) {
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}


class Estado extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            contador:0,
        }

        // setInterval(()=>{
        //     if (this.state.contador<10) {
        //         this.setState({
        //             contador:this.state.contador+1
        //         })
        //     }else{
        //         this.setState({
        //             contador:0
        //         })
        //     }
        // },1000)
    }

    render() {
        return <div>
            <h2>El State</h2>
            <p>{this.state.contador}</p>
            <EstadoAHijo  contadorHijo={this.state.contador}/>
        </div>;
    }
}

export default Estado;