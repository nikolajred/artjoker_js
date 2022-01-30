"use strict";

let calcQuantityNullElements = (matrix) => {
    let quantityNullElements = 0;
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                quantityNullElements++;
            }
        }
    }
    return quantityNullElements;
}

let matrix = [
    [1, 0, 3, 4],
    [5, 6, 0, 8],
    [0, 10, 11, 12]
];

console.log(calcQuantityNullElements(matrix));




let calcAverageUnder = (matrix) => {
    let sumElements = 0;
    let quantityElements = 0;
    for (let i = 1; i < matrix.length; i++){
        for (let j = 0; j < i; j++){
            sumElements+=matrix[i][j];
            quantityElements++;
        }
    }
    return sumElements/quantityElements;
}

let matrixA = [
    [2, 0, 3, 7, 12],
    [6, 2, 20, 4, 15],
    [6, 6, 2, 0, 56],
    [6, 6, 6, 2, 56]
];
console.log(calcAverageUnder(matrixA));




let calcAverageAbove = (matrix) => {
    let sumElements = 0;
    let quantityElements = 0;
    for (let i = 0; i < matrix.length; i++){
        for (let j = i + 1; j < matrix[i].length; j++){
            sumElements+=matrix[i][j];
            quantityElements++;
        }
    }
    return sumElements/quantityElements;
}

let matrixB = [
    [2, 1, 1, 1, 1],
    [6, 2, 1, 1, 1],
    [6, 6, 2, 1, 1],
    [6, 6, 6, 2, 1]
];

console.log(calcAverageAbove(matrixB));