"use strict";

let matrixA = [
    [1, 2 , 3],
    [4, 5, 6],
    [7, 8, 9]
];
// let matrixATransform = [
//     [1, 4 , 7],
//     [2, 5, 8],
//     [3, 6, 9]
// ];

let matrixB = [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
];

// let matrixBTransform = [
//     [10, 13, 16],
//     [11, 14, 17],
//     [12, 15, 18]
// ];

let matrixC = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

// let matrixCTransform = [
//     [1, 5, 9],
//     [2, 6, 10],
//     [3, 7, 11],
//     [4, 8, 12]
// ];

let checkLengthRows = matrix => {
    let lengthRows = 0;
    for (let i = 0; i < matrix.length; i++){
        if(matrix[i].length > lengthRows){
            lengthRows = matrix[i].length;
        }
    }return lengthRows;
}
let checkLengthColumns = matrix =>{
    let lengthColumns = matrix.length;
    return lengthColumns;
}

let transformMatrix = matrix =>{
    if(checkLengthRows(matrix) === checkLengthColumns(matrix)){
        let newMatrix = JSON.parse(JSON.stringify(matrix));
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                newMatrix[j][i] = matrix[i][j];
            }
        } return newMatrix;
    }else{
        let newMatrix = Array(checkLengthRows(matrix));
        for(let i = 0; i < newMatrix.length; i++){
            newMatrix[i] = Array(checkLengthColumns(matrix));
        }
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                newMatrix[j][i] = matrix[i][j];
            }
        }return newMatrix;
    }
}

let sumMatrix = (matrixFirst, matrixSecond) =>{

    let newMatrix = JSON.parse(JSON.stringify(matrixFirst));
    for(let i = 0; i < matrixFirst.length; i++){
        for(let j = 0; j < matrixFirst[i].length; j++){
            newMatrix[i][j] = matrixFirst[i][j] + matrixSecond[i][j];
        }
    } return newMatrix;

}

console.log(transformMatrix(matrixA));
console.log(transformMatrix(matrixB));
console.log(transformMatrix(matrixC));

console.log(sumMatrix(matrixA, matrixB));