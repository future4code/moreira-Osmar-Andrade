

export type Movie = {
    id: number,
    title: string,
    year: number,
}

export enum Gender{
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER",
}

export type character = {
    id:number,
    name:string,
    gender:Gender,
    description?:string,
}
