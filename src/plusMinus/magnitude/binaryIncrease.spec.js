let binaryIncrease = require('./binaryIncrease');
let IntegerState = require('../../state/IntegerState');


describe("Magnitude Increase", function () {
    it("1 increase by  1 = 2", function () {
        let n1 = new IntegerState(1);
        let n2 = new IntegerState(1);

        let result = binaryIncrease(n1, n2);

        expect(result.toJsNumber()).toBe(2);
    });
});