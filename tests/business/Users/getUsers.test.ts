import { UserBusiness } from "../../../src/business/UserBusiness"
import { LogInSchema } from "../../../src/dtos/Users/LogInDTO"
import { USER_ROLES } from "../../../src/models/User"
import { HashManagerMock } from "../../mocks/HashManagerMock"
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../../mocks/TokenManagerMock"
import { UserDatabaseMock, usersMock } from "../../mocks/UserDataBaseMock"

describe("Testando getUsers", () => {

    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Deve retornar users", async () => {

        const output = await userBusiness.getUsers()

        expect(output).toEqual([
            {
              id: "id-mock-fulano",
              name: "Fulano",
              email: "fulano@email.com",
              createdAt: expect.any(String),
              role: USER_ROLES.NORMAL
            },
            {
              id: "id-mock-astrodev",
              name: "Astrodev",
              email: "astrodev@email.com",
              createdAt: expect.any(String),
              role: USER_ROLES.ADMIN
            },
          ])
    })
})