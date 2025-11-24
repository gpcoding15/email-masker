const { maskEmail } = require('./email-masker.js');

describe("email-masker", () => {
    test("it should return a masked email when user inputs their email", () => {
        const email = "testmail@gmail.com";

        const result = maskEmail(email);

        expect(result).toBe("t******l@gmail.com");
    });


});