let zeroMatrix = (matrix) => {

    //go through each element in matrix
    for (let r = 0; r < matrix.length; r++) {
        
        for (let c = 0; c < matrix[0].length; c++) {

             //if you spot a zero make entire row zero
            if (matrix[r][c] === 0) {
                for (let i = 0; i < matrix[0].length; i++) {
                    matrix[r][i] = 0;
                }
            }

        }
    }
    return matrix;
         
}

let matrix = [[1,1,1], [1,1,0],[1,1,1]];

console.log(matrix);
zeroMatrix(matrix);
console.log(matrix); //[ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 1, 1, 1 ]]