let binaryIncrease = require('./magnitude/binaryIncrease');
let binaryDecrease = require('./magnitude/binaryDecrease');
let IntegerState = require('../state/IntegerState');

/**
 *  @param n1 {IntegerState}
 *  @param n2 {IntegerState}
 *  @return {IntegerState}
 **/
function binarySubtract(n1, n2) {
    if(n1.isPositive === n2.isPositive){
        let temp = new IntegerState();
        temp.isPositive = n2.isPositive;
        temp.bits = n2.bits.slice();

        return binaryDecrease(new IntegerState(n1), temp);
    }else{
        let temp = new IntegerState();
        temp.isPositive = !n2.isPositive;
        temp.bits = n2.bits.slice();

        return binaryIncrease(new IntegerState(n1), temp);
    }
}

module.exports = binarySubtract;