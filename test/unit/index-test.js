import { myFunction, times } from "src/index";

describe("a description", function() {

  it("a test case", function() {
    assert.isTrue(myFunction([1, 2, 3], 1));
  });

  it("a test case", function() {
    assert.strictEqual(times(2, 3), 6);
  });
});
