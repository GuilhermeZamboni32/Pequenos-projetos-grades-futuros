import './App.css'   
import Cabecalho from './Components/Cabecalho';
import Passo0 from './Components/passo0';
import Passo1 from './Components/Passo1';
import Passo2 from './Components/Passo2';

function App() {

  
  
  return (
    <div className='container-app'>
      <Cabecalho />

      <div className='todos-passos'>


      <button><Passo0 /></button>
      <button><Passo1 /></button>
      <button><Passo2 /></button>

      </div>


      

    </div>



)
}

export default App




/*
const [conteudo, setConteudo] = useState(<Passo0 />)
function mostrarHome(){
  setConteudo(<Passo0 />)
}
function mostrarProdutos(){
  setConteudo(<Passo1 />)
}






        <header>
        <nav>
          <button onClick={mostrarHome}>Home</button>
          <button onClick={mostrarProdutos}>Produtos</button>
        </nav>
      </header>

      <button><Passo0 /></button>
      <button><Passo1 /></button>
      <button><Passo2 /></button>*/