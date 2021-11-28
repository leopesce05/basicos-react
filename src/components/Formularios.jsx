import React, { useState } from 'react';

// function Formularios() {

//     //Estados
//     const [nombre, setNombre] = useState("");
//     const [sabor, setSabor] = useState("");
//     const [lenguaje, setLenguaje] = useState("");
//     const [terminos, setTerminos] = useState(false);


//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         alert("El formulario fue enviado")
//     }

//     return ( 
//         <>
//         <h2>Formularios</h2>
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="nombre">Nombre:</label>
//             <input type="text" id="nombre" name="nombre" onChange={(e)=>{setNombre(e.target.value)}}/>
//             <p>Nombre: {nombre}</p>

//             <p>Elige tu Sabos JS Favorito</p>
//             <input type="radio" id='react' name='sabor' value='react' onChange={(e)=>{setSabor(e.target.value)}}/>
//             <label htmlFor="react">React</label>
//             <input type="radio" id='angular' name='sabor' value='angular' onChange={(e)=>{setSabor(e.target.value)}}/>
//             <label htmlFor="angular">Angular</label>
//             <input type="radio" id='vue' name='sabor' value='vue' onChange={(e)=>{setSabor(e.target.value)}}/>
//             <label htmlFor="vue">Vue</label>
//             <input type="radio" id='svelte' name='sabor' value='svelte' onChange={(e)=>{setSabor(e.target.value)}}/>
//             <label htmlFor="svelte">Svelte</label>
//             <p>Sabor:{sabor}</p>

//             <p>Elige tu lenguaje de programacion Favorito</p>
//             <select name="lenguaje" onChange={(e)=>{setLenguaje(e.target.value)}} defaultValue=''>
//                 <option disabled value="" >Selecciona el lenguaje</option>
//                 <option value="js">JavaScript</option>
//                 <option value="php">PHP</option>
//                 <option value="py">Python</option>
//                 <option value="go">GO</option>
//                 <option value="rb">Ruby</option>
//             </select>
//             <p>Lenguaje:{lenguaje}</p>

//             <br />
//             <label htmlFor="terminos">Acepto terminos y condiciones</label>
//             <input type="checkbox" id='terminos' onChange={(e)=>{setTerminos(e.target.checked)}} />
//             <p>Terminos {terminos?"aceptados":"denegados"}</p>

//             <input type="submit" value='enviar' />
//         </form>
        
//         </>
//      );
// }

function Formularios() {

    //Estados
    const [form, setForm] = useState({});

    const handleChange =(e)=>{
        setForm({
        ...form,
        [e.target.name]:e.target.value,

        })
    }

    const handleChecked =(e)=>{
        setForm({
        ...form,
        [e.target.name]:e.target.checked,

        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("El formulario fue enviado")
    }

    return ( 
        <>
        <h2>Formularios</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange}/>
            <p>Nombre: {form.nombre}</p>

            <p>Elige tu Sabos JS Favorito</p>
            <input type="radio" id='react' name='sabor' value='react' onChange={handleChange}/>
            <label htmlFor="react">React</label>
            <input type="radio" id='angular' name='sabor' value='angular' onChange={handleChange}/>
            <label htmlFor="angular">Angular</label>
            <input type="radio" id='vue' name='sabor' value='vue' onChange={handleChange}/>
            <label htmlFor="vue">Vue</label>
            <input type="radio" id='svelte' name='sabor' value='svelte' onChange={handleChange}/>
            <label htmlFor="svelte">Svelte</label>
            <p>Sabor:{form.sabor}</p>

            <p>Elige tu lenguaje de programacion Favorito</p>
            <select name="lenguaje" onChange={handleChange} defaultValue=''>
                <option disabled value="" >Selecciona el lenguaje</option>
                <option value="js">JavaScript</option>
                <option value="php">PHP</option>
                <option value="py">Python</option>
                <option value="go">GO</option>
                <option value="rb">Ruby</option>
            </select>
            <p>Lenguaje:{form.lenguaje}</p>

            <br />
            <label htmlFor="terminos">Acepto terminos y condiciones</label>
            <input type="checkbox" id='terminos' name='terminos' onChange={handleChecked} />
            <p>Terminos {form.terminos?"aceptados":"denegados"}</p>

            <input type="submit" value='enviar' />
        </form>
        
        </>
     );
}

export default Formularios;