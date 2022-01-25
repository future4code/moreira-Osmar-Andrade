import React from "react"
import '../App.css';

class Etapa2 extends React.Component {
    render(){
     return (
     <div >
         <h1>Etapa 2-Informalçoes do ensino superior</h1>
 
         <div>
             <p>5.qual curso?</p>
             <select>
                 <option>ingles</option>
                 <option>administraçao</option>
                 <option>informatica</option>
             </select>
         </div>
 
         <div>
             <p>6.qual unidade?</p>
             <select>
                 <option>fisk</option>
                 <option>unip</option>
                 <option>labenu</option>
             </select>

         </div>
         
     </div>
    )
 }
 
 }
 
 export default Etapa2;
 