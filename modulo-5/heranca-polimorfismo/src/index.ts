class Mae {
    nome:string
    sobrenome:string = "Maciel"
     constructor(nome:string){
         this.nome = nome
     } 
}

class filho extends Mae {
  profissao:string
   constructor(nome:string, profissao:string){
       super(nome)
       this.profissao = profissao
   }
}

const osmar = new filho("Osmar", "Programador")
const esposa = new filho("Lorena","desenvolvedora")
const mamae = new Mae ("Maronita")
console.log(mamae.nome, mamae.sobrenome)
console.log(osmar.profissao,osmar.nome, osmar.sobrenome )
console.log(esposa.profissao,esposa.nome, esposa.sobrenome)