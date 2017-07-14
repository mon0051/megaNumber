let binaryDecrease = require('./binaryDecrease');
let IntegerState = require('../../internal-state/IntegerState');

describe("Binary Decrease", function () {
    it("1 lower by 1 is 0", function () {
        let n1 = new IntegerState(1);
        let n2 = new IntegerState(1);

        let result = binaryDecrease(n1, n2);

        expect(result.toJsNumber()).toBe(0);
    });

    it("5 decrease by 3 is 2", function () {
        let n1 = new IntegerState(5);
        let n2 = new IntegerState(3);

        let result = binaryDecrease(n1, n2);

        expect(result.toJsNumber()).toBe(2);
    });
});