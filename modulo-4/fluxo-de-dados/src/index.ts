import  express, {Request, Response} from "express"
import  cors from "cors"
import { appendFile } from "fs"
import { request } from "http"
import { response } from "express"


const app = express()

app.use(express.json())

app.use (cors())


// end pont de verificação
app.get("/teste", (req:Request,res:Response)=>{
    const name = req.query.name

    if(!name){
        res.status(400).send("faltou inserir a query name ")
    }

    res.status(200).send(`ola ${name}`)
})

