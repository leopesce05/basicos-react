import {useState, useEffect} from "react";



function ScrollHooks() {

    const [scrollY , setScrollY ] = useState(0);

    useEffect(() => {
        console.log("Fase de actualizacion")

        const detectarScroll=()=>{
            setScrollY(window.pageYOffset)
        }

        window.addEventListener("scroll",detectarScroll)

    });

    useEffect(() => {
        console.log("Fase de montaje")
    }, []);

    return ( 
        <>
        <h2>Hooks - useEffect y el Ciclo de Vida</h2>
        <p>Scroll Y del Navegador {scrollY}px</p>
        </>
     );
}

export default ScrollHooks;