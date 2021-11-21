import React,{useState,useEffect} from "react";

function Reloj({hora}){
    return(
        <h3>{hora}</h3>
    )

}


function RelojHooks() {

    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    const tictac=(valor)=>{

        setVisible(valor)
    
    }

    useEffect(() => {
        let temporizador;

        if (visible) {
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        }else{
            clearInterval(temporizador);
        }

        return()=>{
            console.log("Fase de desmontaje")
            clearInterval(temporizador);
        }

    }, [visible]);



    return ( 
        <>
        <h2>Reloj con Hooks</h2>
        {visible && <Reloj hora={hora} />}
        <button onClick={()=>{tictac(true)}}>Iniciar</button>
        <button onClick={()=>{tictac(false)}}>Detener</button>
        </>
     );
}

export default RelojHooks;