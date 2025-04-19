import { sum } from "../helpers/sum";

describe("the sum function", () => {
    test("two plus two is four", () => {
        let first = 2;
        let second = 2;
        let expectation = 4;
        let result = sum(first, second);
        expect(result).toBe(expectation);
    });

    test("minus eight plus four", () => {
        let first = -8;
        let second = 4;
        let expectation = -4;
        let result = sum(first, second);
        expect(result).toBe(expectation);

    });

});
