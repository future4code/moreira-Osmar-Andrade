import React from "react"
import './App.css';

class Etapa3 extends React.Component {
    render(){
     return (
        <div >
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
    
            <div>
                <p>7. Por que você não terminou um curso de graduação?</p>
                <input type="text"  id="" />
            </div>
    
            <div>
                <p>8. Você fez algum curso complementar?</p>
                <select>
                    <option>nenhum</option>
                    <option >curso técnico</option>
                    <option >curso de ingles</option>
                </select>
            </div>

            <div>
                    <button>Proxima etapa</button>
            </div>
            
        </div>
    )
  }
 }
 
 export default Etapa3;
 