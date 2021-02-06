const server = require("../server/app");
const request = require('supertest');
const { expect } = require('chai');


describe("", () => {

  it("Test header: content-type: application/json", async () => {
    const res = await request(server)
      .get('/');
    expect(res.statusCode).eq(200);
  });

  it("Test tile:", async () => {
    const res = await request(server)
      .get('/tile/1/1/1.grid.json');
    expect(res.statusCode).eq(200);
//    console.log(res.body);
    expect(res.body.grid).a("array");
  });

});
