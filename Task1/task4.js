"use strict";


let maxElement = 0;
let findMaxElement = (array, index) => {
    index = index || 0;
    maxElement = maxElement || 0;
    if (array[index] > maxElement) {
        maxElement = array[index];
    }
    if (index < array.length) {
        findMaxElement(array, index + 1);
    }
     return maxElement;
}

let minElement = 0;
let findMinElement = (array, index) => {
    index = index || 0;
    if (array[index] < minElement) {
        minElement = array[index];
    }
    if (index < array.length) {
        findMinElement(array, index + 1);
    }
    return minElement;
}

let quantityZeroEl = 0;
let findZeroElement = (array, index) => {
    index = index || 0;
    if (array[index] === 0) {
        quantityZeroEl++;
    }
    if (index < array.length) {
        findZeroElement(array, index + 1);
    }
    return quantityZeroEl;
}

let quantityNegativeEl = 0;
let findNegativeElement = (array, index) => {
    index = index || 0;
    if (array[index] < 0) {
        quantityNegativeEl++;
    }
    if (index < array.length) {
        findNegativeElement(array, index + 1);
    }
    return quantityNegativeEl;
}

let quantityPositiveEl = 0;
let findPositiveElement = (array, index) => {
    index = index || 0;
    if (array[index] > 0) {
        quantityPositiveEl++;
    }
    if (index < array.length) {
        findPositiveElement(array, index + 1);
    }
    return quantityPositiveEl;
}

let arrayA = [22, 3, -33, -8, 100];
let arrayB = [-100, -100, 12, 56, 2, 5];
let arrayC = [-3, 0, 8, -6, 0, 90];
let arrayD = [25, 45, -9, 7, 78, 56];
let arrayE = [-69, 7, -13, 32, 9, 78];

console.log(findMinElement(arrayA));
console.log(findMaxElement(arrayB));
console.log(findZeroElement(arrayC));
console.log(findNegativeElement(arrayD));
console.log(findPositiveElement(arrayE));



