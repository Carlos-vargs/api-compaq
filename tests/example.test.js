const request = require("supertest");
const app = require("../src/app");

describe("GET /api/example", () => {
  it("should return example data", async () => {
    const res = await request(app).get("/api/example");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
