

import axios from "axios"
import React, {useEffect, useState} from 'react' 
import styled from 'styled-components'


const Container = styled.div`
    width: 500px;
    height: 750px;
    border: 1px solid black;
    border-radius: 15px;
    position: relative;
`
const Title = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
`
const BoxImage = styled.div`
    display: flex;
    justify-content: center;
`
const Img = styled.img`
    border-radius: 15px;
    box-shadow: 1px 1px 7px black;
    width: 90%;
    height: 525px;
    
`
const Desc = styled.div`
    width: 80%;
    padding: 0px 15px; 
    color: white;
    position: relative;
    left: 30px;
    bottom: 130px;
`
const DivButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: relative;  
    bottom: 50px;  
`
const FirstButton = styled.button`
    height: 70px;
    width: 70px;
    font-size: 40px;
    border-radius: 50px;
    border-color: red;
    color:red;
    cursor: pointer;
    &:hover{
        font-size: 50px;
        background-color: red;
        color: white;
    }
`
const SecondButton = styled.button`
    height: 70px;
    width: 70px;
    font-size: 40px;
    border-radius: 50px;
    border-color: green;
    color: green;
    cursor: pointer;
    &:hover{
        font-size: 50px;
        background-color: green;
        color: white;
    }
`

const TelaInicial = (props) => {

    const [deslike, setDeslike] = useState(true);
    const [like, setLike] = useState(false);
    const [allMatches, setAllMatches] = useState({})
    
    const retornaPerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person";
        axios
        .get(url)
        .then((res) => {
            console.log("sou seu res: ",res )
            setAllMatches(res.data.profile)
        })
        .catch((err) => {
            console.log("err")
        })
    }

    const escolhaLike = () => {
        
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person"
        const body = {
            id: "71gMbZs2txS9LDvGK5Ew",
            choice: true
        }
        axios
        .post(url, body)
        .then((res) => {
            console.log("likeee!")
            retornaPerfil(res.data.profile)
        })
        .catch((err) => {
            console.log("erro!")
        })
       
    }

    useEffect(() => {
        retornaPerfil()
    }, [])

    return(
        <Container>
            <Title>
                <h1>AstroMatch</h1>
                <p>?<button onClick={props.botao}>Pag of matches</button></p>
            </Title>
            <BoxImage>
                <Img src={allMatches.photo} alt="imagem-perfi" />
            </BoxImage>
            <Desc>
                <h3>{allMatches.name}, {allMatches.age}</h3>
                <p>{allMatches.bio}</p>
            </Desc>
            <DivButtons>
                <FirstButton onClick={retornaPerfil}>X</FirstButton>
                <SecondButton onClick={escolhaLike}>?</SecondButton>
            </DivButtons>
        </Container>
    )
}
export default TelaInicial
