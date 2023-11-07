// TODO: Define a Validate class with an isPassword() function that takes in a password parameter.
class Validate {
    constructor() {
        this.isPassword = (password) => {
            if (password.length === 0) {
                return false;
            }
            return true;
        };
    }
}

// TODO: Export the Validate class from this file.
export default Validate;