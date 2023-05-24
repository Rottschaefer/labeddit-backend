import { CommentBusiness } from "../business/CommentBusiness";
import { Request, Response } from "express"
import { CreateCommentSchema } from "../dtos/Comments/createCommentDTO";
import { ZodError } from "zod";
import { BaseError } from "../errors/BaseError";
import { GetCommentsSchema } from "../dtos/Comments/getCommentsDTO";
import { LikeCommentInputSchema } from "../dtos/Comments/likeCommentDTO";
import { VerifyLikeInputSchema } from "../dtos/Posts/VerifyLikeDTO";


export class CommentController {
    constructor(
        private commentBusiness: CommentBusiness
    ) { }

    public getComments = async (req: Request, res: Response) => {
        try {

            const input = GetCommentsSchema.parse( {
                token: req.headers.authorization,
                postId: req.params.id
            })

            const output = await this.commentBusiness.getCommentsByPostId(input)

            res.status(200).send(output)
        }
        catch (error) {
            console.log(error)
        }
    }

    public createComments = async (req: Request, res: Response) => {
        try {

            const input = CreateCommentSchema.parse({
                token: req.headers.authorization,
                postId: req.params.id,
                content: req.body.content
            })

            await this.commentBusiness.createComment(input)

            res.status(200).send({ content: input.content })
        }
        catch (error) {
            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            }

            else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }

    }

    public likePost = async (req: Request, res: Response) => {

        try {

            const input = LikeCommentInputSchema.parse({
                id: req.params.id,
                postId: req.body.postId,
                token: req.headers.authorization,
                like: req.body.like
            })

            const isLiked = await this.commentBusiness.likeComment(input)

            res.status(200).send({isLiked: isLiked})

        }
        catch (error) {

            console.log(error)
            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            }

            else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public verifyLike = async (req: Request, res: Response) => {

        try {


            const input = VerifyLikeInputSchema.parse({
                id: req.params.id,
                token: req.headers.authorization
            })


            const likeSituation = await this.commentBusiness.verifyLike(input)

            res.status(200).send({likeSituation})

        }
        catch (error) {

            console.log(error)
            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            }

            else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
}