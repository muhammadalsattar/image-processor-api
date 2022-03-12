import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("App endpoints scenarios", function () {
    it("Should response with 404 given unknown filename", async () => {
        const response = await request.get("/images/unknown");
        expect(response.status).toBe(404);
    });
    it("Should response with 200 given a valid filename", async () => {
        const response = await request.get("/images/fjord");
        expect(response.status).toBe(200);
    });
    it("Should response with the correct file for the default route", async () => {
        const response = await request.get("/");
        expect(response.headers["content-type"]).toBe(
            "text/html; charset=UTF-8"
        );
    });
    it("Should response with the correct file for the rest of the routes", async () => {
        const response = await request.get("/*");
        expect(response.headers["content-type"]).toBe(
            "text/html; charset=UTF-8"
        );
    });
});
