import express from "express"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"
import { CommentController } from "../controller/CommentController"
import { CommentBusiness } from "../business/CommentBusiness"
import { CommentDatabase } from "../database/CommentDataBase"


export const commentRouter = express.Router()

const commentController = new CommentController(
    new CommentBusiness(
        new CommentDatabase,
        new IdGenerator,
        new TokenManager
    ) 
)

commentRouter.get("/:id", commentController.getComments)
commentRouter.get("/:id/verify-like", commentController.verifyLike)

commentRouter.post("/:id", commentController.createComments)

commentRouter.put("/:id/like", commentController.likePost)

