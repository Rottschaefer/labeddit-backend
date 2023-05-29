import { BaseDatabase } from "../../src/database/BaseDatabase"
import { CommentDB } from "../../src/models/Comments"
import { usersMock } from "./UserDataBaseMock"

export let commentsMock: CommentDB[] = [{
    id: "id-mock-comment-1",
    post_id: "id-mock-post-fulano",
    user_id: "id-mock-fulano",
    content: "Conteúdo teste",
    likes: 10,
    dislikes: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
},
{
    id: "id-mock-comment-2",
    post_id: "id-mock-post-astrodev",
    user_id: "id-mock-astrodev",
    content: "Conteúdo teste 2",
    likes: 20,
    dislikes: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
}
]


export class CommentDatabaseMock extends BaseDatabase {
    public static TABLE_COMMENTS = "comments"
    public static TABLE_COMMENTS_LIKES_DISLIKES = "comments_likes_dislikes"
    public static TABLE_USERS = "users"

    public getCommentsByPostId = async (input: any) => {

        const comments = commentsMock.filter((comment) => comment.post_id === input.postId)

        return [comments, usersMock]
    }

    public createComment = async (newComment: CommentDB) => {

        commentsMock.push(newComment)
    }

    public likeComment = async (likesNumber: number, dislikesNumber: number, id: string, userId: string, isLiked: number) => {

        commentsMock = commentsMock.map((comment) => {
            if (comment.id === id) {
                comment.likes = likesNumber
                comment.dislikes = dislikesNumber
            }

            return comment
        })
    }

    public dislikeComment = async (likesNumber: number, dislikesNumber: number, id: string, userId: string, isLiked: number) => {

        commentsMock = commentsMock.map((comment) => {
            if (comment.id === id) {
                comment.likes = likesNumber
                comment.dislikes = dislikesNumber
            }

            return comment
        })
    }

    public verifyLike = async (comment_id: string, user_id: string) => {

        let isLiked = 2

        return isLiked


    }
}