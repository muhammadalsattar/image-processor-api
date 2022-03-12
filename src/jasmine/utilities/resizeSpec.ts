import resize from "../../utilities/resize";

describe("Resize function scenarios", () => {
    it("Should resolve given right params", async () => {
        const promise = resize("fjord", 300, 300);
        await expectAsync(promise).toBeResolved();
    });
    it("Should return proper error message when something goes wrong", async () => {
        const promise = await resize("filename", 300, 300);
        expect(promise).toBe("Something went wrong!");
    });
});
