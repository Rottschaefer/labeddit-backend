import { CommentDatabaseMock, commentsMock } from "../../mocks/CommentsDataBaseMock"
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../../mocks/TokenManagerMock"
import { CommentBusiness } from "../../../src/business//CommentBusiness"



describe("Testando createComment", () => {

    const commentBusiness = new CommentBusiness(
        new CommentDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock()
    )

    test("Deve criar comentários corretamente", async () => {

        await commentBusiness.createComment({
            token: "token-mock-fulano",
            postId: "id-mock-post-fulano",
            content: "Novo comentário"
        })

        expect(commentsMock).toHaveLength(3)
    })

})