import React, { useState } from 'react';

function Formularios() {

    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");

    return ( 
        <>
        <h2>Formularios</h2>
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" onChange={(e)=>{setNombre(e.target.value)}}/>
            <p>Nombre: {nombre}</p>

            <p>Elige tu Sabos JS Favorito</p>
            <input type="radio" id='react' name='sabor' value='react' onChange={(e)=>{setSabor(e.target.value)}}/>
            <label htmlFor="react">React</label>
            <input type="radio" id='angular' name='sabor' value='angular' onChange={(e)=>{setSabor(e.target.value)}}/>
            <label htmlFor="angular">Angular</label>
            <input type="radio" id='vue' name='sabor' value='vue' onChange={(e)=>{setSabor(e.target.value)}}/>
            <label htmlFor="vue">Vue</label>
            <input type="radio" id='svelte' name='sabor' value='svelte' onChange={(e)=>{setSabor(e.target.value)}}/>
            <label htmlFor="svelte">Svelte</label>
            <p>Sabor:{sabor}</p>

            <p>Elige tu lenguaje de programacion Favorito</p>
            <select name="lenguaje" onChange={(e)=>{setLenguaje(e.target.value)}}>
                <option value="" >---</option>
                <option value="js">JavaScript</option>
                <option value="php">PHP</option>
                <option value="py">Python</option>
                <option value="go">GO</option>
                <option value="rb">Ruby</option>
            </select>
            <p>Lenguaje:{lenguaje}</p>
        </form>
        
        </>
     );
}

export default Formularios;