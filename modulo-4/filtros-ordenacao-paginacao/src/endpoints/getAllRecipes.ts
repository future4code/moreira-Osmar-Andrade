import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   let errorCode=400
   try {
      const table='aula49_recipes'
      const title=req.query.title
      let sort = req.query.sort as string
      let order = req.query.order as string
      let page = Number(req.query.page)
      if(page<1 || isNaN(page)){
         page=1
      }
       let size = 2
       let offset = size*(page-1)
       
      if(!title){
         errorCode=422
         throw new Error("Informe o título da receita");
      }
      if(sort!=='title' && sort !== "created_at"){
         sort="title"
      }

      if(order.toUpperCase()!== "ASC" && order.toUpperCase() !== "DESC"){
         order= "DESC"
      }
      const result = await connection(table)
      .where('title','LIKE',`%${title}%` )
      .orderBy(sort,order)
      .limit(size)
      .offset(offset)

      const recipes = result.map(toRecipe)

      // const result = await connection.raw(`
      //    SELECT * FROM ${table}
      //    WHERE title LIKE '%${title}%'
      //    ORDER BY ${sort} ${order}
      //    LIMIT ${size}
      //    OFFSET ${offset};
      // `)
      // console.log(result[0])
      // const recipes = result[0].map(toRecipe)
     

     if(recipes.length===0){
        errorCode =200
        throw new Error("Não foi encontrada nenhuma receita com este título");
        
     }
      console.log(500+450+170+75+579+31+500+65)
      res.status(200).send(recipes)
     

   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}