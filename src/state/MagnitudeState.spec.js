let IntegerState = require('./IntegerState');

describe("Binary Number Test Suite", function () {

    it("numbers 1 holds value" , function () {
        let n1 = new IntegerState(1);

        expect(n1.toJsNumber()).toBe(1);
    });

    it("numbers 0 holds value", function () {
        let n1 = new IntegerState(0);

        expect(n1.toJsNumber()).toBe(0);
    });

    it("even number holds value", function () {
        let n1 = new IntegerState(222);

        expect(n1.toJsNumber()).toBe(222);
    });
    
    it("odd number holds value", function () {
        let n1 = new IntegerState(1001);

        expect(n1.toJsNumber()).toBe(1001);
    });

    it("remembers negative number state", function(){
        expect(new IntegerState(-1).toJsNumber()).toBe(-1);
    });

});