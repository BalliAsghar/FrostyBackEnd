const request = require("supertest");
const app = require("../../app");
const db = require("../../config/db");
const runSeed = require("../../config/seed");

// beforeEach(async () => {
// await runSeed();
// });

afterAll(async () => {
  //await db.closeDB();
});

describe("/api/users", () => {
  describe("GET", () => {
    test("status:200 and returns array of user objects", () => {
      return request(app)
        .get("/api/users")
        .expect(200)
        .then((res) => {
          expect(typeof res.body.users).toEqual("object");
          expect(res.body.users.length).not.toBe(undefined);
          res.body.users.map((user) => {
            expect(typeof user.username).toEqual("string");
            expect(typeof user.email).toEqual("string");
            expect(typeof user.displayName).toEqual("string");
            expect(typeof user.dateOfBirth).toEqual("string");
            expect(typeof user.followedUsers).toEqual("object");
            expect(typeof user.followedCategories).toEqual("object");
            expect(typeof user.postedPictures).toEqual("object");
            expect(typeof user.attendedEvents).toEqual("object");
            expect(typeof user.hostedEvents).toEqual("object");
            expect(typeof user.dateJoined).toEqual("string");
          });
        });
    });
  });

  describe("Test", () => {
    test("should give back 200", () => {
      return request(app).get("/api/users").expect(200);
    });
  });

  describe("GET api/users/:user_id", () => {
    test("Status 200: Returns a single user object", () => {
      return request(app)
        .get("/api/users/61b0d0249ea3440ac734c140")
        .expect(200)
        .then((response) => {
          expect(response.body.user).toEqual(
            expect.objectContaining({
              _id: expect.any(String),
              username: expect.any(String),
              displayName: expect.any(String),
              dateOfBirth: expect.any(String),
              followedUsers: expect.any(Array),
              followedCategories: expect.any(Array),
              postedPictures: expect.any(Array),
              attendedEvents: expect.any(Array),
              hostedEvents: expect.any(Array),
              dateJoined: expect.any(String),
            })
          );
        });
    });

    test("Status: 404 returns 'not found if response null", () => {
      return request(app)
        .get("/api/users/61b0d0249ea3440ac734c150")
        .expect(404)
        .then((res) => {
          expect(res.body.message).toBe("User not found");
        });
    });

    test("Status 400: responds with invalid ID when passed invalid mongo ObjectID", () => {
      return request(app)
        .get("/api/users/notanId")
        .expect(404)
        .then((res) => {
          expect(res.body.message).toBe("Invalid ID");
        });
    });
  });

  describe.skip("DELETE api/users/:user_id", () => {
    test("Status 204: reponds with no content and deletes record", () => {
      return request(app)
        .delete("/api/users/61b0d0249ea3440ac734c149")
        .expect(204)
        .then(() => {});
    });
  });
});
