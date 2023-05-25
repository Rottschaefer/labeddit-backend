import { PostDB } from "../../src/models/Posts";
import { BaseDatabase } from "../../src/database/BaseDatabase";
import { usersMock } from "../mocks/UserDataBaseMock"


export const postsMock: PostDB[] = [{
    id: "id-mock-post-fulano",
    creator_id: "id-mock-fulano",
    content: "Bananinha",
    likes: 23,
    dislikes: 12,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
},
{
    id: "id-mock-post-astrodev",
    creator_id: "id-mock-astrodev",
    content: "Pepino",
    likes: 54,
    dislikes: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
}]

export class PostDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "posts"
    public static TABLE_USERS = "users"
    public static TABLE_LIKES_DISLIKES = "likes_dislikes"



    public getPosts = async () => {

        return ([postsMock, usersMock])
    }

    public createPost = async (NewPostDB: PostDB) => {

       postsMock.push(NewPostDB)

    }

    public editPost = async (id: string, content: string):Promise<void> => {

    postsMock.map((post)=>{
            if(post.id === id){
                post.content = content
            }

            return post
        })


    }

    public deletePost = async (id: string) => {

        postsMock.filter((post)=> post.id !==id)

    }

    public likePost = async (likesNumber: number, dislikesNumber: number, post_id: string, user_id: string, isLiked: number) => {

        postsMock.map((post)=>{
            if(post.id === post_id){
                post.likes = likesNumber
                post.dislikes = dislikesNumber
            }
        })


        // if (isLiked === 3) {
        //     await BaseDatabase.connection(PostDatabase.TABLE_LIKES_DISLIKES).delete().where({ post_id, user_id })
        // }

        // await BaseDatabase.connection(PostDatabase.TABLE_LIKES_DISLIKES).update({ like: 1 }).where({ post_id, user_id })

    }

    public dislikePost = async (likesNumber: number, dislikesNumber: number, post_id: string, user_id: string, isLiked: number) => {

        postsMock.map((post)=>{
            if(post.id === post_id){
                post.likes = likesNumber
                post.dislikes = dislikesNumber
            }
        })


        // if (isLiked === 3) {
        //     await BaseDatabase.connection(PostDatabase.TABLE_LIKES_DISLIKES).delete().where({ post_id, user_id })
        // }

        // await BaseDatabase.connection(PostDatabase.TABLE_LIKES_DISLIKES).update({ like: 0 }).where({ post_id, user_id })

    }

    public verifyLike = async (post_id: string, user_id: string) => {

        // let [likes_dislikes] = await BaseDatabase.connection(PostDatabase.TABLE_LIKES_DISLIKES).where({ post_id, user_id })

        let isLiked = 0

        // if (!likes_dislikes) {
        //     await BaseDatabase.connection(PostDatabase.TABLE_LIKES_DISLIKES).insert({ user_id, post_id, like: 2 }).where({ post_id, user_id });

        //     [likes_dislikes] = await BaseDatabase.connection(PostDatabase.TABLE_LIKES_DISLIKES).where({ post_id, user_id })

        //     isLiked = likes_dislikes.like
        // }
        // else if (likes_dislikes) {
        //     isLiked = likes_dislikes.like
        // }

        return isLiked
    }

}