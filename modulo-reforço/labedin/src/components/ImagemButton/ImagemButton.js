import React from 'react';
import styled from 'styled-components';

const ImagemDoButton = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;

img{
    width: 30px;
    margin-right: 10px;
}

img:hover{
    cursor: pointer;
    border: 1px solid green;
    background-color: white;
    border-radius: 50px;
}


`


function ImagemButton(props) {
    return (
        <ImagemDoButton>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemDoButton>

    )
}

export default ImagemButton;