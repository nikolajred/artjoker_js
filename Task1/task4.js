"use strict";


let maxElement = 0;
let findMaxElement = (array) => {

    if (array[array.length - 1] > maxElement) {
        maxElement = array[array.length - 1];
    }
    array.length--;
    if (array.length > 0) {
        findMaxElement(array);
    }
    return maxElement;
}

let minElement = 0;
let findMinElement = (array) => {

    if (array[array.length - 1] < minElement) {
        minElement = array[array.length - 1];
    }
    array.length--;
    if (array.length > 0) {
        findMinElement(array);
    }
    return minElement;
}

let quantityZeroEl = 0;
let findZeroElement = (array) => {

    if (array[array.length - 1] === 0) {
        quantityZeroEl++;
    }
    array.length--;
    if (array.length > 0) {
        findZeroElement(array);
    }
    return quantityZeroEl;
}

let quantityNegativeEl = 0;
let findNegativeElement = (array) => {

    if (array[array.length - 1] < 0) {
        quantityNegativeEl++;
    }
    array.length--;
    if (array.length > 0) {
        findNegativeElement(array);
    }
    return quantityNegativeEl;
}

let quantityPositiveEl = 0;
let findPositiveElement = (array) => {

    if (array[array.length - 1] > 0) {
        quantityPositiveEl++;
    }
    array.length--;
    if (array.length > 0) {
        findPositiveElement(array);
    }
    return quantityPositiveEl;
}

let arrayA = [22, 3, -33, -8, 100];
let arrayB = [5, 0, -12, 56, 2, 5];
let arrayC = [-3, 0, 8, -6, 0, 90];
let arrayD = [25, 45, -9, 7, 78, 56];
let arrayE = [-69, 7, -13, 32, 9, 78];

console.log(findMinElement(arrayA));
console.log(findMaxElement(arrayB));
console.log(findZeroElement(arrayC));
console.log(findNegativeElement(arrayD));
console.log(findPositiveElement(arrayE));



