const UserService = require("../../services/userService");
const { loginDataMock } = require("../mocks/dataMock");

const userService = new UserService();
const userData = loginDataMock;

describe("Unit Testing : user.service.js", () => {
    it("[-] Login User to DB", async () => {
        const user = userService.login(userData.email,userData.password);
        await expect(user).rejects.toThrow("Pengguna tidak ditemukan.");
    })
})
