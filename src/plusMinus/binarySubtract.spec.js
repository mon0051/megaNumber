let binarySub = require('./binarySubtract');
let IntegerState = require('../state/IntegerState');

describe("Binary Number Subtraction", function () {
    it("odd sub odd 5 - 7 = -2", function () {
        let n1 = new IntegerState(5);
        let n2 = new IntegerState(7);

        let result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(-2);
    });

    it("even plus odd 6 - 7 = -1", function () {
        let n1 = new IntegerState(6);
        let n2 = new IntegerState(-7);

        let result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(13);
    });

    it("even sub even 6 - 16 = -10", function () {
        let n1 = new IntegerState(6);
        let n2 = new IntegerState(16);

        let result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(-10);
    });

    it("bigger take smaller",function () {
        let n1 = new IntegerState(1600);
        let n2 = new IntegerState(600);
        
        let result = binarySub(n1,n2);

        expect(result.toJsNumber()).toBe(1000);
    });

    it("take nothing",function () {
        let n1 = new IntegerState(100);
        let n2 = new IntegerState(0);

        let result = binarySub(n1,n2);

        expect(result.toJsNumber()).toBe(100);
    });

    it("two negatives cancel" ,function () {
        let n1 = new IntegerState(-10);
        let n2 = new IntegerState(-10);

        let result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(0);
    });

    it("negative take positive",function () {
        let n1 = new IntegerState(-10);
        let n2 = new IntegerState(10);

        let result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(-20);
    })
});