describe(name, fn)

const myBevarage = {
    delicious: true,
    sour: false,
};

describe("my beverage", () => {
    test("is delicious", () => {
        expect(myBevarage.delicious).toBeTruthy();
    });

    test("is not sour", () => {
        expect(myBevarage.sour).toBeFalsy();
    });
});

console.log(myBevarage.delicious);
console.log(myBevarage.sour);
