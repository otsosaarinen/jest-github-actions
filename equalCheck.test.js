const equalCheck = require("./equalCheck");

test("pass if input is number and equal", () => {
    expect(equalCheck(4)).toBeTruthy();
});
