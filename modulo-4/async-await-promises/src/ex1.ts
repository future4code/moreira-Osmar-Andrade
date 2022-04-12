import Axios from "axios";
import {baseURL} from "./baseURL"


async function assinantes ():Promise<any[]>{
    const base = `${baseURL}/subscribers` 
     const response = await Axios.get(base)
  return response.data 
}

assinantes()

