import React from 'react';
import styled from 'styled-components';

const ImagemCardPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px  solid black;
    padding: 15px 30px;
    margin: 10px auto;

    img{
        width: 30px;
    
    }
`


function CardPequeno(props) {
    return (
       <ImagemCardPequeno>
            <img src={ props.imagem }/>
            <p>{props.texto}</p>
       </ImagemCardPequeno>
    )
}

export default CardPequeno;