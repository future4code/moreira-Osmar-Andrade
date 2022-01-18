import React from "react"


class Etapa1 extends React.Component {
  render(){
    return (
    <div >
        <h1>Etapa 1- ados Gerais</h1>

        <div>
            <p>1.qual o seu nome?</p>
            <input type="text"  id="" />
        </div>

        <div>
            <p>2.qual a sua idade?</p>
            <input type="text"  id="" />
        </div>

        <div>
            <p>3.qual o seu Email?</p>
            <input type="text"  id="" />
        </div>
        
        <div>
            <p>4.qual a sua escolaridade?</p>
            <select>
                <option>ensino fundamental completo</option>
                <option >ensino medio completo</option>
                <option >ensino fundamental incompleto</option>
                <option >ensino medio imcpmpleto</option>  

            </select>
            <div>
                <button>Proxima etapa</button>
            </div>
        </div>
        
    </div>
  )
 }

}

export default Etapa1;
