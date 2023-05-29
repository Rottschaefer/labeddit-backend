import { UserBusiness } from "../../../src/business/UserBusiness"
import { SignUpSchema } from "../../../src/dtos/Users/SignUpDTO"
import { HashManagerMock } from "../../mocks/HashManagerMock"
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../../mocks/UserDataBaseMock"

describe("Testando sign up", () => {

    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Deve gerar token ao cadastrar", async () => {

        const input = SignUpSchema.parse({
            name: "Ciclana",
            email: "ciclana@email.com",
            password: "454647"
        })

        const output = await userBusiness.signUp(input)

        expect(output).toEqual({token: "token-mock"})
    })
})