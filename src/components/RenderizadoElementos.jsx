import React from 'react';
import data from '../helpers/data.json'

function ElementoLista(props){
    return(
        <li>
            <a href={props.el.web}>{props.el.name}</a>
        </li>
    )
}

class RenderizadoElementos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            estaciones : ["Primavera","Verano","Otoño","Invierno"]
         }
    }
    render() { 
        console.log(data)
        return ( 
            <div>
                <h2>Renderizado de Elementos</h2>
                <h4>Estaciones del año</h4>
                <ol>
                    {this.state.estaciones.map((el)=>
                        <li key={el}>{el}</li>
                    )}
                </ol>
                <h3>Frameworks Frontend JavaScript</h3>
                <ul>
                    {data.frameworks.map((el)=> (<ElementoLista key={el.id} el={el} />))}
                </ul>
            </div>
         );
    }
}
 
export default RenderizadoElementos;