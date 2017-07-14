let IntegerState = require('../../state/IntegerState');

function bigger(n1,n2){
    if(n1.bits.length > n2.bits.length){
        return true;
    }
    if(n2.bits.length > n1.bits.length){
        return false;
    }
    for(let i = (n1.bits.length-1); i > 0; i--){
        if(n1.bits[i] === n2.bits[i]){
            continue;
        }
        return n1.bits[i];
    }
    return false;
}
/**
 * @param {IntegerState} number
 */
function trimZeros(number){
    if(number.bits[number.bits.length-1] === true){
        return;
    }

    for(let i = (number.bits.length-1); i >= 0; i--){
        if(number.bits[i] === true){
            number.bits = number.bits.slice(0,i+1);
            return;
        }
    }
}

/**
 * @param {IntegerState} number
 * @param {number} index
 */
function borrowBit(number, index) {
    if(index === (number.bits.length - 1) && number.bits[index] === false){
        throw "Bad borrow";
    }
    if(typeof number.bits[index] === 'undefined' || number.bits[index] === null || number.bits[index] === undefined){
        throw "index out of bounds";
    }
    if(number.bits[index] === true){
        number.bits[index] = false;
    }else{
        number.bits[index] = true;
        borrowBit(number, index + 1);
    }

}
/**
 *
 * @param n1 {IntegerState}
 * @param n2 {IntegerState}
 * @returns {IntegerState}
 */
function subImpl(n1, n2) {
    let result = new IntegerState();
    result.bits = n1.bits.slice();
    result.isPositive = n1.isPositive;

    for(let i = (n1.bits.length -1); i >= 0; i--){
        if(!n2.bits[i]) continue;
        borrowBit(result,i);
    }

    trimZeros(result);
    return result;
}

/**
 *  @param n1 {IntegerState}
 *  @param n2 {IntegerState}
 *  @return {IntegerState}
 **/
function binarySub(n1, n2) {
    if(n1.isPositive !== n2.isPositive){
        throw "Can't subtract numbers with opposite signs";
    }

    let n1Bigger = bigger(n1,n2);

    let magnitudeDifference = null;

    if (n1Bigger === true) {
        magnitudeDifference = subImpl(n1, n2);
        magnitudeDifference.isPositive = n1.isPositive;
    } else {
        magnitudeDifference = subImpl(n2, n1);
        magnitudeDifference.isPositive = !n1.isPositive;
    }
    return magnitudeDifference;
}

module.exports = binarySub;