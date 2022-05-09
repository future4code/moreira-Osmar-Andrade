import { character, Gender, Movie } from "./type"

export const movies: Movie[] =[
    {
        id:1,
        title:"X-Men: O Filme",
        year:2000
    },

    {
        id:2,
        title:"DEADPOOL",
        year:2021,
    }
]

export const characters :character[] = [
    {
         id:1,
         name:"Storn",
         gender: Gender.FEMALE
    },{
        id:2,
        name:"deadpool",
        gender: Gender.OTHER

    },{
        id:3,
        name:"colossus",
        gender:Gender.MALE,
    }
]