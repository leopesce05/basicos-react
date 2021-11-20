import {useState, useEffect} from "react";



function ScrollHooks() {

    const [scrollY , setScrollY ] = useState(0);

    useEffect(() => {
        //console.log("Movimiento del scroll")

        const detectarScroll=()=>{
            setScrollY(window.pageYOffset)
        }

        window.addEventListener("scroll",detectarScroll)

        return () => {
            window.removeEventListener("scroll",detectarScroll)
            //console.log("Fase de Desmontaje")
        }

    },[scrollY]);

    useEffect(() => {
        // console.log("Fase de actualizacion")
    });

    useEffect(() => {
        //console.log("Fase de montaje")
    }, []);

    useEffect(() => {
        
    }, []);



    return ( 
        <>
        <h2>Hooks - useEffect y el Ciclo de Vida</h2>
        <p>Scroll Y del Navegador {scrollY}px</p>
        </>
     );
}

export default ScrollHooks;