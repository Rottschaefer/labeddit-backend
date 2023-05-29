import { USER_ROLES } from "../../models/User";
import z from "zod";

export interface SignUpInputUserDTO {
    name: string,
    email: string,
    password: string,
}

export interface SignUpOutputUserDTO {
    token: string 
}

export const SignUpSchema = z.object({
  
  name: z
    .string({
      required_error: "'name' é obrigatório",
      invalid_type_error: "'name' deve ser do tipo string"
    })
    .min(2, "'name' deve possuir no mínimo 2 caracteres"),

  email: z
    .string({
      required_error: "'email' é obrigatório",
      invalid_type_error: "'email' deve ser do tipo string"
    })
    .email("'Email' inválido"),
    
  password: z
    .string({
      required_error: "'Password' é obrigatório",
      invalid_type_error: "'Password' deve ser do tipo string"
    })
    .min(4, "'Password' deve possuir no mínimo 4 caracteres")
}).transform(data => data as SignUpInputUserDTO)
