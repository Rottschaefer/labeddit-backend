import express from 'express'
import cors from 'cors'
import { userRouter } from './router/UserRouter'
import { postRouter } from './router/PostRouter'
import {commentRouter } from './router/CommentsRouter'

const app = express()

app.use(cors())
app.use(express.json())


app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.use("/users", userRouter)

app.use("/posts", postRouter)

app.use("/comments", commentRouter)