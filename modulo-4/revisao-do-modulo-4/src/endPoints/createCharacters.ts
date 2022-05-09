import {Request,Response} from "express"
import { characters } from "../data"



export function createCharacters (
    req:Request,
   res:Response
): void{

    const {name,gender} = req.body

    characters.push({
        id: Date.now(),
        name,
        gender,
    })
   res.send()
}

