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