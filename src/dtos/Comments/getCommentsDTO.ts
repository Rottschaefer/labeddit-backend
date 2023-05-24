import z from "zod";


export interface GetCommentsInputDTO {
    token: string
    postId: string
}

export const GetCommentsSchema = z.object({
    postId: z.string({
        required_error: "É necessário o id do Post para acessar a requisição getComments"
    }).min(1),
    token: z.string({
        required_error: "É necessário um token para acessar a requisição getComments"
    }).min(1)
    
}).transform(data => data as GetCommentsInputDTO)