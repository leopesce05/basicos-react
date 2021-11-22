import React,{useState,useEffect} from 'react';
import {useFetch} from '../hooks/useFetch.js'

// function Pokemon({avatar,name}){

//     return(
//         <figure>
//             <img src={avatar} alt={name} />
//             <figcaption>{name}</figcaption>
//         </figure>
//     );
// }

function HooksPersonalizador() {
    const [pokemons, setPokemons] = useState(null);
    
    let url = "https://pokeapi.co/api/v2/pokemon";


    return ( 
        <>
        <h2>Hooks Personalizados</h2>
        
        </>
     );
}

export default HooksPersonalizador;