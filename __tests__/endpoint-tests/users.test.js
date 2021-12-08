const request = require("supertest");
const app = require("../../app");

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

    //test("404 test pacecholder")
  });
  describe("DELETE", () => {
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
