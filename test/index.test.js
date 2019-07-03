const { returnTrue, returnFalse } = require("../index");
var { assert, expect, should } = require("chai");

describe("returnTrue", () => {
  it("should return true", () => {
    const expected = true;
    const result = returnTrue();
    expect(expected).to.equal(result);
  });
});

describe("returnFalse", () => {
  it("should return false", () => {
    const expected = false;
    const result = returnFalse();
    expect(expected).to.equal(result);
  });
});
