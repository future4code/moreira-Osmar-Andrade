
import TelaInicial from "./TelaInicial";
import TelaMatches from "./TelaMatches"
import styled from "styled-components";
import { useState } from "react";


const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`

const App = () => {
  
  const [telaAtual, setTelaAtual] = useState("pagHome")
  const [trocarDeTela, setTrocarDeTela] = useState("")

    const renderizaTela = () => {
        switch(telaAtual){
            case "pagHome":
                return <TelaInicial botao={trocaTela}/>
            case "pagMatch":
                return <TelaMatches />
            default: 
                return <TelaInicial />      
        }
        return "oi"
    }

    const trocaTela = () => {
      setTelaAtual("pagMatch")
    }

  return (
    <BoxContainer >
      {renderizaTela()}
      oi
    </BoxContainer>
  );
}
export default App;