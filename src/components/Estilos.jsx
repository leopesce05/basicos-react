import React from 'react';
import './Estilos.css'
import moduleStyles from './Estilos.module.css'
import './Estilos.scss'

function Estilos() {
    return ( 
        <section className='estilos'>
            <h2>Estilos CSS en React</h2>
            <h3 className='bg-react'>Estilos en hoja CSS externa</h3>
            <h3 className='bg-react' style={{borderRadius:".25rem", margin:"1rem"}}>Estilos en linea CSS externa</h3>
            <h3 className={moduleStyles.error}>Estilos con modulos</h3>
            <h3 className={moduleStyles.success}>Estilos con modulos</h3>
            <h3 className="bg-sass">Estilos con SASS</h3>
        </section>
     );
}

export default Estilos;