import Axios from "axios"
import { baseURL } from "./baseURL"

const assinantes = async () :Promise<any> => {
    const base = `${baseURL}/subcribers`
    const response = await Axios.get(base)
    return response.data

}

assinantes ()