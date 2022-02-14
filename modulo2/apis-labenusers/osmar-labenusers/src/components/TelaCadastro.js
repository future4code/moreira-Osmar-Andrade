import React from "react"
import axios from "axios"


class TelaCadastro extends React.Component{
    state={
        inputNome: "",
        inputEmail:""
    }
    criarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: "string",
            email: "string"
        }
        const headers = {
            headers:{Authorization: "Osmar-Andrade-Morreira"}
        }
     
        
        axios
            .post(url,body,headers)
            .then((res)=>{
                alert("usuario cadastrado com sucesso!")
                this.setState({inputNome:"", inputEmail: ""})
            })
            .catch((erro)=>{
                alert(erro.response.data.message)

            })
    }
    onChangeNome = (event) =>{
        this.setState({inputNome:event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({inputEmail:event.target.value})
    }
    render(){
        console.log(this.state.inputNome)
        return(
            <div>
                <input value={this.state.inputNome} onChange={this.onChangeNome} type="text" placeholder="nome"/>
                <input  value={this.state.inputEmail} onChange={this.onChangeEmail} type="text" placeholder="email"/>
                <button>cadastre-se</button>

            </div>
        )
    }
}

export default TelaCadastro;