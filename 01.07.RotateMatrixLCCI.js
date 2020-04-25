/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var _matrix=JSON.parse(JSON.stringify(matrix)), len = matrix.length;
    for(var i=0;i<len;i++){
         for(var j=0;j<len;j++){
             matrix[j][len-1-i]=_matrix[i][j];
         }
    }
};