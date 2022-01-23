"use strict";

function addFactorialInCash(func) {
    let cache = {};
    return function () {
        let key = JSON.stringify(arguments);
        if (cache[key]) {
            return cache[key];
        } else {
            let val = func.apply(this, arguments);
            cache[key] = val;
            return val;
        }
    }
}

let calcFactorial = addFactorialInCash(function(number) {
    if(number === 1) return 1;
    return number * calcFactorial(number-1);
});

console.log(calcFactorial(3));