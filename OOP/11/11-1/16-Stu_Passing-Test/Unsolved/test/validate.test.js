const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  test('isPassword() returns false when the password is less than 8 characters', () => {
    const validate = new Validate();
    expect(validate.isPassword('1234567')).toBe(false);
  });

  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  test('isPassword() returns false when the password does not contain at least 1 uppercase', () => {
    const validate = new Validate();
    expect(validate.isPassword('12345678')).toBe(false);
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  test('isPassword() returns false when the password does not contain at least 1 lowercase', () => {
    const validate = new Validate();
    expect(validate.isPassword('12345678A')).toBe(false);
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  test('isPassword() returns false when the password does not contain at least 1 number', () => {
    const validate = new Validate();
    expect(validate.isPassword('abcdefghi')).toBe(false);
  });
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
  test('isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number', () => {
    const validate = new Validate();
    expect(validate.isPassword('12345678A')).toBe(true);
  });
});
