import { CommentDatabaseMock } from "../../mocks/CommentsDataBaseMock"
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../../mocks/TokenManagerMock"
import { CommentBusiness } from "../../../src/business//CommentBusiness"



describe("Testando getComments", () => {

    const commentBusiness = new CommentBusiness(
        new CommentDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock()
    )

    test("Deve retornar comentários do post corretamente", async () => {

        const comments = await commentBusiness.getCommentsByPostId({
            token: "token-mock-fulano",
            postId: "id-mock-post-fulano"
        })

        expect(comments).toEqual([{
            id: "id-mock-comment-1",
            post_id: "id-mock-post-fulano",
            user_id: "id-mock-fulano",
            content: "Conteúdo teste",
            likes: 10,
            name: "Fulano",
            dislikes: 2,
            created_at: expect.any(String),
            updated_at: expect.any(String)
        }])
    })

})