function fromJsNumber(number) {
    let bits = [];
    this.isPositive = (number > 0);
    if(number < 0){
        number = number * (-1);
    }
    while(number >= 1){
        bits[bits.length] = (number % 2 > 0);
        number = (number / 2) - (number % 2);
        number = number.toFixed(0)
    }
    if(number > 0){
        bits[bits.length] = true;
    }
    this.bits = bits;

}

function fromIntegerState(number){
    if(number.toString() === "[object IntegerState]"){
        this.bits = number.bits.slice();
        this.isPositive = number.isPositive;
    }else{
        this.bits = [];
        this.isPositive = true;
    }
}

// TODO : Parse from string so we can easily enter numbers by hand
let converterMap = {
    'number' : fromJsNumber,
    'object' : fromIntegerState
};
/**
 * @param {IntegerState|number|undefined|null}numberIn
 * @constructor
 */
function IntegerState(numberIn){
    this.bits = [];
    this.isPositive = false;
    let that = this;

    (function (){
        let converter = converterMap[typeof numberIn];
        if (typeof converter === 'function') {
            converter.call(that, numberIn);
        }
    }());

    this.toJsNumber = function () {
        let bits = this.bits;
        let number = 0;

        bits.forEach(function (value, index) {
            if(value){
                number+= Math.pow(2,index);
            }
        });

        if(this.isPositive === true) return number;

        return number * (-1);
    };
    /**
     *
     * @param {IntegerState} n2
     */
    this.isEqualValue = function (n2) {
        if(n2.toString() !== "[object IntegerState]"){
            return false;
        }
        return that.bits.every(function (value,index) {
            return that.bits[index] === n2.bits[index];
        });

    };

    this.toString = function () {
        return "[object IntegerState]";
    };
}

module.exports = IntegerState;