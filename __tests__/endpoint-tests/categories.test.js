const request = require("supertest");
const app = require("../../app");

describe("/api/categories", () => {
  describe("GET", () => {
    test("status:200 and returns array of category objects", () => {
      return request(app)
        .get("/api/categories")
        .expect(200)
        .then((res) => {
          expect(typeof res.body.categories).toEqual(typeof []);
          expect(res.body.categories.length).not.toBe(undefined);
          res.body.categories.map((category) => {
            expect(typeof category.category_name).toBe("string");
          });
        });
    });
    test("status:404 and returns status code and a message", () => {
      return request(app)
        .get("/api/categories")
        .expect(404)
        .then((res) => {
          expect(res.body.message).toBe("No categories found");
        });
    });
  });
  describe("POST", () => {
    test("status:405 and returns error message if method is wrong", () => {
      return request(app)
        .post("/api/categories")
        .expect(405)
        .then((res) => {
          expect(res.body.message).toEqual("Method not allowed");
        });
    });
  });
  describe("GET", () => {
    test("status:404 and returns error message if url is invalid", () => {
      return request(app)
        .get("/api/categories/wrongpath")
        .expect(404)
        .then((res) => {
          expect(res.body.message).toEqual("Invalid Url");
        });
    });
  });
});
