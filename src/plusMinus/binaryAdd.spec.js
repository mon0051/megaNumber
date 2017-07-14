let binaryAdd = require('./binaryAdd');
let IntegerState = require('../state/IntegerState');

describe("Binary Number Addition",function(){
    it("odd plus odd 5 + 7 = 12", function () {
        let n1 = new IntegerState(5);
        let n2 = new IntegerState(7);

        let result = binaryAdd(n1, n2);

        expect(result.toJsNumber()).toBe(12);
    });

    it("even plus odd 6 + 7 = 13", function () {
        let n1 = new IntegerState(6);
        let n2 = new IntegerState(7);

        let result = binaryAdd(n1, n2);

        expect(result.toJsNumber()).toBe(13);
    });

    it("even plus even 6 + 6 = 12", function () {
        let n1 = new IntegerState(6);
        let n2 = new IntegerState(6);

        let result = binaryAdd(n1, n2);

        expect(result.toJsNumber()).toBe(12);
    });

    it("even plus negative 6 + -6 = 0", function () {
        let n1 = new IntegerState(6);
        let n2 = new IntegerState(-6);

        let result = binaryAdd(n1, n2);

        expect(result.toJsNumber()).toBe(0);
    });

});