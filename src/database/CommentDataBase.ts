import { GetCommentsInputDTO } from "../dtos/Comments/getCommentsDTO"
import { CommentDB } from "../models/Comments"
import { BaseDatabase } from "./BaseDatabase"

export class CommentDatabase extends BaseDatabase {
    public static TABLE_COMMENTS = "comments"
    public static TABLE_COMMENTS_LIKES_DISLIKES = "comments_likes_dislikes"
    public static TABLE_USERS = "users"

    public getCommentsByPostId = async (input : any) => {
        
        const comments = await BaseDatabase.connection(CommentDatabase.TABLE_COMMENTS).where({post_id: input.postId})

        const users = await BaseDatabase.connection(CommentDatabase.TABLE_USERS)

        return [comments, users]
    }

    public createComment = async (newComment: CommentDB) => {
        
        await BaseDatabase.connection(CommentDatabase.TABLE_COMMENTS).insert(newComment)
    }

    public likeComment = async (likesNumber: number, dislikesNumber: number, id: string, userId: string, isLiked:number) => {
        
        await BaseDatabase.connection(CommentDatabase.TABLE_COMMENTS).update({likes: likesNumber, dislikes: dislikesNumber}).where({id})

            if(isLiked === 3){
                await BaseDatabase.connection(CommentDatabase.TABLE_COMMENTS_LIKES_DISLIKES).delete().where({comment_id: id, user_id: userId})
            }

            await BaseDatabase.connection(CommentDatabase.TABLE_COMMENTS_LIKES_DISLIKES).update({ like: 1 }).where({comment_id: id, user_id: userId})
    }

    public dislikeComment = async (likesNumber: number, dislikesNumber: number, id: string, userId: string, isLiked:number) => {
        
        await BaseDatabase.connection(CommentDatabase.TABLE_COMMENTS).update({likes: likesNumber, dislikes: dislikesNumber}).where({id})

            if(isLiked === 3){
                await BaseDatabase.connection(CommentDatabase.TABLE_COMMENTS_LIKES_DISLIKES).delete().where({comment_id: id, user_id: userId})
            }

            await BaseDatabase.connection(CommentDatabase.TABLE_COMMENTS_LIKES_DISLIKES).update({ like: 0 }).where({comment_id: id, user_id: userId})
    }

    public verifyLike = async (comment_id: string, user_id: string) => {

        let [likes_dislikes] = await BaseDatabase.connection(CommentDatabase.TABLE_COMMENTS_LIKES_DISLIKES).where({ comment_id, user_id })

        let isLiked

        if(!likes_dislikes){
        await BaseDatabase.connection(CommentDatabase.TABLE_COMMENTS_LIKES_DISLIKES).insert({ comment_id, user_id, like: 2});

        [likes_dislikes] = await BaseDatabase.connection(CommentDatabase.TABLE_COMMENTS_LIKES_DISLIKES).where({ comment_id, user_id })

        isLiked = likes_dislikes.like
        }
        else if(likes_dislikes){
            isLiked = likes_dislikes.like
        }

        return isLiked
    }


}