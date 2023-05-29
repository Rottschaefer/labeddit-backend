import { PostBusiness } from "../../../src/business/PostBusiness"
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock"
import { PostDatabaseMock, postsMock } from "../../mocks/PostDatabaseMock"
import { TokenManagerMock } from "../../mocks/TokenManagerMock"


describe("Testando like e dislike no post", () => {

    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock()
    )

    test("Deve dar like no post corretamente", async () => {

        await postBusiness.likePost({
            id: "id-mock-post-astrodev",
            token: "token-mock-fulano",
            like: true
        })

        expect(postsMock[1].likes).toEqual(55)
    })

    test("Deve dar dislike no post corretamente", async () => {

        await postBusiness.likePost({
            id: "id-mock-post-astrodev",
            token: "token-mock-fulano",
            like: false
        })

        expect(postsMock[1].likes).toEqual(55)
    })

})