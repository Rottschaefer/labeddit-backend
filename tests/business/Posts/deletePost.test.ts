import { PostBusiness } from "../../../src/business/PostBusiness"
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock"
import { PostDatabaseMock, postsMock } from "../../mocks/PostDatabaseMock"
import { TokenManagerMock } from "../../mocks/TokenManagerMock"


describe("Testando deletePost", () => {

    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock()
    )

    test("Deve deletar post corretamente", async () => {

        await postBusiness.deletePost({
            id: "id-mock-post-fulano",
            token: "token-mock-fulano"
        })


        expect(postsMock).toHaveLength(1)
    })

})