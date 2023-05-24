export interface CommentDB {
    id: string,
    user_id: string,
    post_id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string
}

export class Comment{
    constructor(
       private id: string,
       private post_id: string,
       private user_id: string,
       private content: string,
       private likes: number,
       private dislikes: number,
       private created_at: string,
       private updated_at: string
    ){}

    public getId = ():string => {
        return this.id
    }

    public setId = (value: string) => {
        return this.id = value
    }

    public getPostId = ():string => {
        return this.post_id
    }

    public setPostId = (value: string) => {
        return this.post_id = value
    }

    public getUserId = ():string => {
        return this.user_id
    }

    public setUserId = (value: string) => {
        return this.user_id = value
    }
    
    public getContent = ():string => {
        return this.content
    }

    public setContent = (value: string) => {
        return this.content = value
    }
    
    public getLikes = ():number => {
        return this.likes
    }

    public setLikes = (value: number) => {
        return this.likes = value
    }
    
    public getDislikes = ():number => {
        return this.dislikes
    }

    public setDislikes = (value: number) => {
        return this.dislikes = value
    }
    
    public getCreatedAt = ():string => {
        return this.created_at
    }

    public setCreatedAt = (value: string) => {
        return this.created_at = value
    }

    public getUpdatedAt = ():string => {
        return this.updated_at
    }

    public setUpdatedAt = (value: string) => {
        return this.updated_at = value
    }
}