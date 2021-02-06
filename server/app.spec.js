const server = require("../server/app");
const request = require('supertest');
const { expect } = require('chai');


describe("", () => {

  it("Test header: content-type: application/json", async () => {
    const res = await request(server)
      .get('/');
    expect(res.statusCode).eq(200);
  });

});
