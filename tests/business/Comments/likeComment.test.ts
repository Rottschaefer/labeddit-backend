import { CommentDatabaseMock, commentsMock } from "../../mocks/CommentsDataBaseMock"
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../../mocks/TokenManagerMock"
import { CommentBusiness } from "../../../src/business//CommentBusiness"



describe("Testando likeComment", () => {

    const commentBusiness = new CommentBusiness(
        new CommentDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock()
    )

    test("Deve dar like no comentário corretamente", async () => {

        await commentBusiness.likeComment({
            id: "id-mock-comment-1",
            token: "token-mock-astrodev",
            postId: "id-mock-post-fulano",
            like: true
        })

        expect(commentsMock[0].likes).toEqual(11)
    })

    test("Deve dar dislike no comentário corretamente", async () => {

        await commentBusiness.likeComment({
            id: "id-mock-comment-1",
            token: "token-mock-astrodev",
            postId: "id-mock-post-fulano",
            like: false
        })

        expect(commentsMock[0].dislikes).toEqual(3)
    })

})