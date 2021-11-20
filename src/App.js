import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6,EventosES7,MasSobreEventos} from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloDeVida from './components/CicloDeVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Componente msg="hola soy un componente function" />
        <hr/>
        <Propiedades 
        cadena="Esto es un texto"
        numero={19}
        booleano={true} 
        arreglo={[1,2,3,4]}
        objeto= {{nombre:"Jhon",correo:"leonardo.pesce2003@gmail.com"}}
        funcion={(num)=> num*num}
        elementoReact={<i>Esto es un elemento React</i>}
        componenteReact={<Componente msg="Soy un componente pasado como prop" />}  
        />
        <hr/>
        <Estado />
        <hr/>
        <RenderizadoCondicional />
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosES6 />
        <hr/>
        <EventosES7 />
        <hr/>
        <MasSobreEventos />
        <hr/>
        <Padre />
        <hr/>
        <CicloDeVida />
        <hr/>
        <AjaxApis />
        <hr/>
        <ContadorHooks />
        <hr />
        <ScrollHooks />
      </header>
    </div>
  );
}

export default App;
