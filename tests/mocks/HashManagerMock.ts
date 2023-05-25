
export class HashManagerMock {
    public hash = async (): Promise<string> => {

        return "hash-mock"

    }

    public compare = async (
        plaintext: string,
        hash: string
    ): Promise<boolean> => {

        switch(plaintext){
            case "fulano123":
                return hash === "hash-mock-fulano"
            case "astrodev99":
                return hash === "hash-mock-astrodev"
            default:
                return false
        }
    }
}