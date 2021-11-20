import React from 'react';

//Funcion login
function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>
    )
}

//Funcion logout
function Logout(){
    return(
        <div>
            <h3>Logout</h3>
        </div>
    )
}

class RenderizadoCondicional extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            session:true,

        }
    }

    render() { 
        return ( 
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state.session ? <Login /> : <Logout/>}
            </div>
         );
    }
}
 
export default RenderizadoCondicional;