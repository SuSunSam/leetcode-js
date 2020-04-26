/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 复制赋值
var rotate = function(matrix) {
    var _matrix=JSON.parse(JSON.stringify(matrix)), len = matrix.length;
    for(var i=0;i<len;i++){
         for(var j=0;j<len;j++){
             matrix[j][len-1-i]=_matrix[i][j];
         }
    }
};

/**
 * 倒置倒序法
 * 执行用时 :64 ms, 在所有 JavaScript 提交中击败了80.84%的用户
 * 内存消耗 :34 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
let rotate = (matrix) =>{
    for(let i = 0; i < matrix.length; i++){
        for (let j = i; j < matrix[i].length; j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    matrix.forEach(row=> row.reverse())
};  