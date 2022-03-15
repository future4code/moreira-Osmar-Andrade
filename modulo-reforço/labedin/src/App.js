import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno.js/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from "styled-components"

const SectionContainer = styled.div`

  width: 40vw;
  margin: 1px 0;


h3{
  text-align: center;
  margin-bottom: 20px;
}
`


function App() {
  return (
    <div className="App">
      <SectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Osmar" 
          descricao="Oi, eu sou o Osmar. sou aluno da labenu. gosto de estudar e estou gostando muito de aprender a programar com a labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/37/37050.png" 
          texto="Ver mais" 
        />
      </SectionContainer>

      <div className="page-section-container">

        <CardPequeno
             imagem =
             "https://gartic.com.br/imgs/mural/ki/kiiwi/carta.png" alt='icode-de-cartinha'  
               texto = "Email:OsmarmacieldeAndrade@gmail.com"
        />

        <CardPequeno
          imagem =
           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKymddRWwj-LUybUNekH69NKMLGCw7mvgZWjMANmPd0w6VIPRXfRJY2hCvT3xxCFk0cg&usqp=CAU" alt = "icone-da-casinha"
          texto = "Endereço: Luis Alberto Caldas de Oliveira"
        />
   

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://sempreupdate.com.br/wp-content/uploads/2019/09/nasa-logo-web-rgb.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
        
      </div>
    </div>
  );
}

export default App;
