import {PostBusiness} from "../../../src/business/PostBusiness"
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock"
import { PostDatabaseMock } from "../../mocks/PostDatabaseMock"
import { TokenManagerMock } from "../../mocks/TokenManagerMock"
import { GetPostsOutputDTO } from "../../../src/dtos/Posts/GetPostsDTO"
import { string } from "zod"


describe("Testando getPosts", ()=>{

    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock()
    )

    test("Deve retornar posts corretamente", async()=>{

        const postsMockModel = await postBusiness.getPosts({token: "token-mock-fulano"})

        expect(postsMockModel).toEqual([{
            id: "id-mock-post-fulano",
            content: "Bananinha",
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