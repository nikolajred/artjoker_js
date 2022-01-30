"use strict";

let removeRows = (matrix) => {
    let indexRows = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
            if(matrix[i][j] === 0){
                indexRows[i] = i;
            }
        }
    }
    for (let k = 0; k < indexRows.length; k++){
        delete(matrix[indexRows[k]]);
    }
    let newMatrix = [];
    for(let l = 0; l < matrix.length; l++){
        if(matrix[l] !== undefined){
            newMatrix.push(matrix[l]);
        }
    }
    return newMatrix;
}



let removeColumns = (matrix) => {
    let newMatrix = [[]];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                for(let k = 0; k < matrix.length; k++){
                    delete(matrix[k][j]);
                }
            }
        }
    }
    let numberColumns = 0;
    for(let g = 0; g < 1; g++){
        for(let h = 0; h < matrix[g].length; h++){
            if(matrix[g][h] !== undefined){
                numberColumns++;
            }
        }
    }
    if(numberColumns > 0){
        for(let f = 0; f < matrix.length; f++){
            for(let r = 0; r <= numberColumns; r++){
                newMatrix[f] = new Array(r);
            }
        }
    }else return newMatrix;
    let indexT = 0;
    let indexL = 0;
    for (let n = 0; n < matrix.length; n++){
        for (let m = 0; m < matrix[n].length; m++){
            if(matrix[n][m] !== undefined){
                newMatrix[indexT][indexL] = matrix[n][m];
                indexL++;
            }
        }
        indexL = 0;
        indexT++;
    }
    return newMatrix;
}

let matrixA = [
    [1, 5, 0, 7],
    [0, 2, 20, 4],
    [0, 2, 2, 5]
]
console.log(removeColumns(matrixA));

let matrix = [
    [1, 0, 0, 4],
    [5, 8, 1, 8],
    [0, 10, 11, 12]
];

console.log(removeRows(matrix));