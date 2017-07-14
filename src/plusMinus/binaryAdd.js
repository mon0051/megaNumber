let binaryIncrease = require('./magnitude/binaryIncrease');
let binaryDecrease = require('./magnitude/binaryDecrease');
let IntegerState = require('../state/IntegerState');

/**
 *  @param n1 {IntegerState}
 *  @param n2 {IntegerState}
 *  @return {IntegerState}
 **/
function binaryAdd(n1,n2) {
    if(n1.isPositive === n2.isPositive){
        return binaryIncrease(new IntegerState(n1), new IntegerState(n2));
    }else{
        let temp = new IntegerState(n2);
        temp.isPositive = !n2.isPositive;

        return binaryDecrease(new IntegerState(n1),temp);
    }
}

module.exports = binaryAdd;