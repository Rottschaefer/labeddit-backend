import z from "zod";


export interface CreateCommentInputDTO{
    token: string,
    postId: string,
    content: string
}


export const CreateCommentSchema = z.object({
    token: z.string({
        required_error: "É necessário um token para acessar a requisição createPost"
    }).min(1),
    postId: z.string({
        required_error: "É necessário o id do Post para acessar a requisição createComment"
    }).min(1),
    content: z.string({
        required_error: "'content' é obrigatório",
        invalid_type_error: "'content' precisa ser uma string"
    }).min(1, "O conteúdo do comentário deve ter pelo menos 1 caractere"),
    
}).transform(data => data as CreateCommentInputDTO)