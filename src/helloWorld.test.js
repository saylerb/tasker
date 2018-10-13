const helloWorld = require("./helloWorld");

describe("hello world", () => {
  test("we can print hello world", () => {
    expect(helloWorld()).toEqual("Hello, World!");
  })
});
