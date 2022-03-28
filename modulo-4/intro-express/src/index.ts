import express from "express"
import cors from "cors"


const app = express()

app.use(cors())
app.use(express.json())


app.listen(3003,()=>{
    console.log("servidor estar rodando na porta 3003")
})

type User = {
    id: number
    name: string 
    phone: number
    email: string
    website: string
}

const array:object[] = [
    { nome:"osmar"
    }
]





