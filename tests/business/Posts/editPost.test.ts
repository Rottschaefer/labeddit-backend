import {PostBusiness} from "../../../src/business/PostBusiness"
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock"
import { PostDatabaseMock, postsMock } from "../../mocks/PostDatabaseMock"
import { TokenManagerMock } from "../../mocks/TokenManagerMock"
import { GetPostsOutputDTO } from "../../../src/dtos/Posts/GetPostsDTO"
import { PostDB } from "../../../src/models/Posts"


describe("Testando editPosts", ()=>{

    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock()
    )

    test("Deve editar post corretamente", async()=>{

        await postBusiness.editPost({
            id: "id-mock-post-fulano",
            token: "token-mock-fulano",
            content: "Post editado"
        })

        const updatedPosts = await postBusiness.getPosts({token: "token-mock-fulano"})


        expect(updatedPosts).toEqual([{
            id: "id-mock-post-fulano",
            content: "Post editado", //Conteúdo editado
            likes: 23,
            dislikes: 12,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            creator:{
                id: "id-mock-fulano",
                isTheCreator: true,
                name: "Fulano"
            }
        },
        {
            id: "id-mock-post-astrodev",
            content: "Pepino",
            likes: 54,
            dislikes: 3,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            creator:{
                id: "id-mock-astrodev",
                isTheCreator: false,
                name: "Astrodev"
            }
        }])
    })
        
    })

