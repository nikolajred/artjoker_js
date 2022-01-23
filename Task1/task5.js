"use strict";

let convertDecimal = function(number) {
    let arrayBinary = [];
    if(number===0){
        arrayBinary.push(0);
    }else{
        while(number >= 1){
            let result = Math.floor(number % 2);
            arrayBinary.push (result);
            Math.floor(number/=2);
        }
    }
    return arrayBinary.reverse().join("");
};

let convertBinary = (number) =>{
    let finalNumber = 0;
    let arrayNumbers = Array.from(number.toString()).reverse();
    for(let i = 0; i < arrayNumbers.length; i++){
        finalNumber += arrayNumbers[i]*Math.pow(2,i);
    }
    return finalNumber;
}

console.log(convertDecimal(158),'<=>', convertBinary(10011110));

console.log(convertDecimal(12));
console.log(convertBinary(1100));