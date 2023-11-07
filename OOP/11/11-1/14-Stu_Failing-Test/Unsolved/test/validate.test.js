// TODO: Import the Validate class.
const Validate = require("../validate.js");

// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe("Validate", () => {
    test("isPassword() returns false when passed an empty string", () => {
        const validator = new Validate();
        expect(validator.isPassword("")).toBe(false);
    });
});

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
test("isPassword() returns false when passed an empty string", () => {
    const validator = new Validate();
    expect(validator.isPassword("123456789")).toBe(true);
});