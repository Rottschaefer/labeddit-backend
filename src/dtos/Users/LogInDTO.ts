import z from "zod";


export interface LogInInputDTO {
    email: string,
    password: string,
    token?: string
}

export interface LogInOutputDTO{
    token: string
}

export const LogInSchema = z.object({
    email: z.string({
        required_error: "É preciso email para fazer login",
        invalid_type_error: "Email precisa ser string"
    }).email(
        "'Email' inválido"
    ),
    password: z.string({
        required_error: "É preciso uma senha para fazer login",
        invalid_type_error: "Senha precisa ser string"
    }).min(1, "É preciso uma senha para fazer login"),
    token: z.string({
        invalid_type_error: "'Token' deve ser do tipo string"
      }).optional()
})