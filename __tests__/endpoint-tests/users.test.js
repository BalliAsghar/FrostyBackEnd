const request = require("supertest");
const app = require("../../app");
const db = require("../../config/db2");

beforeAll(async () => {
  await db.connectDB();
});

afterAll(async () => {
  await db.closeDB();
});

describe("/api/users", () => {
  describe.skip("GET", () => {
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

    //test("404 test pacecholder")
  });

  describe("Test", () => {
    test("should give back 200", () => {
      return request(app).get("/api/users").expect(200);
    });
  });
  describe.skip("DELETE", () => {
    test("status:405 and returns error message if method is wrong", () => {
      return request(app)
        .delete("/api/users")
        .expect(405)
        .then((res) => {
          expect(res.body.message).toEqual("Method not allowed");
        });
    });
  });
});
