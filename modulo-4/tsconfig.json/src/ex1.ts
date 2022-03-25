

// const dia: Number = 30
// const mes: Number = 5
// const ano: Number = 1995



const nome = "osmar"



function retornaDados ( ){
    const dataDeNascimento  = "05/30/1995"
    const data = dataDeNascimento.split("/")
   
  return `Olá me chamo ${nome}, nasci no dia ${data[0]} do mês de  ${data[1]} do ano de ${data[2]}` 
}

console.log(retornaDados())

