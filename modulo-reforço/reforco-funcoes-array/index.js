// // 1.Leia o código abaixo
// // const usuarios = [
// //     { nome: "Amanda Rangel", apelido: "Mandi" },
// //     { nome: "Laís Petra", apelido: "Laura" },
// //     { nome: "Letícia Chijo", apelido: "Chijo" }
// //   ]
  
// //   const novoArrayA = usuarios.map((item, index, array) => {
// //      console.log(item, index, array)
// //   })


// //   a) O que vai ser impresso no console?

// // sera impresso o array usuario recebendo o metodo Map
// // e o metodo map tem nele o item,index e o array 
// // entao sera impresso o objeto inteiro guardado ali na const usuario com os mesmo item com as mesmas propriedades.

// // 2.atividade
// // const usuarios = [
// //     { nome: "Amanda Rangel", apelido: "Mandi" },
// //     { nome: "Laís Petra", apelido: "Laura" },
// //     { nome: "Letícia Chijo", apelido: "Chijo" },
// //   ]
  
// //   const novoArrayB = usuarios.map((item, index, array) => {
// //      return item.nome
// //   })
  
// //   console.log(novoArrayB)
// //   a) O que vai ser impresso no console? 
// //   "Amanda Rangel", "Laís Petra" ,"Letícia Chijo"

// //   3. atividade
// // const usuarios = [
// //     { nome: "Amanda Rangel", apelido: "Mandi" },
// //     { nome: "Laís Petra", apelido: "Laura" },
// //     { nome: "Letícia Chijo", apelido: "Chijo" },
// //   ]
  
// //   const novoArrayC = usuarios.filter((item, index, array) => {
// //      return item.apelido !== "Chijo"
// //   })
  
// //   console.log(novoArrayC)

// //   a) O que vai ser impresso no console? menos a 
// //   "Amanda Rangel","Laís Petra"




// // exercicio 1
// // const pets = [
// //     { nome: "Lupin", raca: "Salsicha"},
// //     { nome: "Polly", raca: "Lhasa Apso"},
// //     { nome: "Madame", raca: "Poodle"},
// //     { nome: "Quentinho", raca: "Salsicha"},
// //     { nome: "Fluffy", raca: "Poodle"},
// //     { nome: "Caramelo", raca: "Vira-lata"},
// //  ]

// // a) Crie um novo array que contenha apenas o nome dos doguinhos

// //  const nomedog = pets.map((dog)=>{
// //     return dog.nome
// //  })

// //  console.log(nomedog)

// // const pets = [
// //     { nome: "Lupin", raca: "Salsicha"},
// //     { nome: "Polly", raca: "Lhasa Apso"},
// //     { nome: "Madame", raca: "Poodle"},
// //     { nome: "Quentinho", raca: "Salsicha"},
// //     { nome: "Fluffy", raca: "Poodle"},
// //     { nome: "Caramelo", raca: "Vira-lata"},
// //  ]

// // //  b) Crie um novo array apenas com os cachorros salsicha
 
// //  const racaSalsicha = pets.map((salsicha)=>{
// //      return salsicha.raca
// //  })
// //  console.log(racaSalsicha)


// // c) Crie um novo array que possuirá mensagens
// //  para enviar para todos os clientes que são poodles. 
// // A mensagem deve ser:
// //  "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// // const pets = [
// //     { nome: "Lupin", raca: "Salsicha"},
// //     { nome: "Polly", raca: "Lhasa Apso"},
// //     { nome: "Madame", raca: "Poodle"},
// //     { nome: "Quentinho", raca: "Salsicha"},
// //     { nome: "Fluffy", raca: "Poodle"},
// //     { nome: "Caramelo", raca: "Vira-lata"},
// //  ]

// // const soPoodle = pets.filter((item)=>{
// //    return item.raca === "Poodle"
    
// // })
// // const mensagemPromo = soPoodle.map((item)=>{
// //     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
// // })
// // console.log(mensagemPromo)


// // execicio 2.

// // const produtos = [
// //     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
// //     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
// //     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
// //     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
// //     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
// //     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
// //     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
// //     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
// //     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
// //     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// //  ]

// // //  a) Crie um novo array que contenha apenas o nome de cada item

// //  const nomeDosItem = produtos.map((item)=>{
// //      return item.nome
// //  })

// //  console.log(nomeDosItem)



// // 2 -------------------------
// // a)
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
//    /*a)  const prod = produtos.map ((item)=>{
//         return item.nome
//     })
//     console.log(prod)  */

//      /*  const desconto = produtos.map((item)=>{
//         return (
//              { nome: item.nome, preco:(item.preco * 0.05).toFixed(2)})
//      })
//      console.log(desconto)
     
//     //c) */
//     /* const mostrarCategoriaBebidas = produtos.filter ((item)=>{
//         return item.categoria === "Bebidas"
//     })
//     console.log(mostrarCategoriaBebidas) */
//     //d)
//    /*  const nomesComYpe = produtos.filter((item, index, array) => {

//         return item.nome.includes("Ypê")
        
//         })
        
//         const mensagemItensProdutos = nomesComYpe.map((item, index, array) => {
            
//         return `Compre ${item.nome} por ${item.preco}`
        
//         })
        
//         console.log(mensagemItensProdutos) *Agradecemos por utilizar nossos serviços! Esperamos trabalhar com você novamente em breve.