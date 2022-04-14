import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
//aqui eu crio meus endpont



app.get("/recipes", getAllRecipes)