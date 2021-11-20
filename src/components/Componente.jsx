import React from "react";

//Componente arrow function
const Componente = (props) =>{
    return(
        <p>{props.msg}</p>
    )
}


//Componente de funcion
// function Componente (props) {
//     return ( <h2>{props.msg}</h2> );
// }

//Componente de clase
// class Componente extends React.Component {
//     render() { 
//         return <div>
//             <h1>{this.props.msg}</h1>
//         </div>;
//     }
// }
 
export default Componente;