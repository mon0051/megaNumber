let IntegerState = require('../../state/IntegerState');

function carryBit(number,index){
    if(number.bits[index]){
        number.bits[index] = false;
        carryBit(number,index+1)
    }else{
        number.bits[index] = true;
    }
}

function addImpl(n1,n2) {
    let result = new IntegerState();
    result.isPositive = n1.isPositive;
    result.bits = n1.bits.map(x=>x);
    n2.bits.forEach(function(value,index){
        if(!value) return;
        carryBit(result,index);
    });

    return result;
}

/**
 *  @param {IntegerState} n1
 *  @param {IntegerState} n2
 *  @return {IntegerState}
 **/
function binaryIncrease(n1,n2){
    if(n1.isPositive !== n2.isPositive){
        throw "Binary Number Sign must be same to add";
    }
    if(n1.bits.length > n2.bits.length){
        return addImpl(n1,n2);
    }else{
        return addImpl(n2,n1);
    }
}

module.exports = binaryIncrease;
