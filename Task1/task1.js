"use strict";

const arrayNumbersOfFibonacci = [];

let addFibonacciInCash = (func) => {
    let memoizedKeyValues = [];
    return (...args) => {
        let result = memoizedKeyValues.find( x => x.args === JSON.stringify(args))
        if(result){
            return result.result;
        }
        result = func.apply(this,args);
        memoizedKeyValues.push({
            args: JSON.stringify(args),
            result: result
        })
        return result;
    }
}

let calcFibonacci = addFibonacciInCash( (number) =>{
    if (number === 0){
        arrayNumbersOfFibonacci[0] = 0;
        return 0;
    }
    if (number === 1){
        arrayNumbersOfFibonacci[0] = 0;
        arrayNumbersOfFibonacci[1] = 1;
        return 1;
    }
    else{
        return arrayNumbersOfFibonacci[number] = calcFibonacci(number - 1) +
            calcFibonacci(number - 2);
    }
});


console.log(calcFibonacci(10));
console.log(arrayNumbersOfFibonacci);

console.log(calcFibonacci(20));
console.log(arrayNumbersOfFibonacci);

console.log(calcFibonacci(30));
console.log(arrayNumbersOfFibonacci);

console.log(calcFibonacci(40));
console.log(arrayNumbersOfFibonacci);