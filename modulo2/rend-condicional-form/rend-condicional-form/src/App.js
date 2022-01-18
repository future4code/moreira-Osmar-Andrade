import React from "react"
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import EtapaFinal from "./components/Final"
import '../src/App.css';


class App extends React.Component {

  state = {
    Etapa1 :1,
  }
  proximaPagina = () =>{
    this.setState({Etapa1: this.state.Etapa1 + 1})
  }

  voltaPagina = () =>{
    this.setState({Etapa1: this.state.Etapa1 - 1})
  }
  render () {
    const renderizaTelaCorreta = () =>{
      switch(this.state.Etapa1){
        case 1: 
          return <Etapa1/>
        case 2: 
          return <Etapa2/>
        case 3: 
          return <Etapa3/>
        default: 
          return <EtapaFinal/> 
      }
    }    

    
      return (
        <div>
        {renderizaTelaCorreta()}       
        <button onClick={this.proximaPagina}>Proxima Etapa</button>
        <button onClick={this.voltaPagina}>voltar a Pagina</button>
      </div>
      );
    }


}
export default App;
