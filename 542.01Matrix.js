var updateMatrix = function(matrix) {
    if(matrix.length==0) return ;
    var st = [],cur;
    var f = [[0,-1],[-1,0],[0,1],[1,0]];

    for(var i=0;i<matrix.length;i++){
        for(var j=0;j<matrix[0].length;j++){
            matrix[i][j]==1 && (matrix[i][j]=-1);
            matrix[i][j]==0 && (st.push([i,j]));
        }
    } 
    while(st.length){
        cur = st.pop();
        for(var i = 0; i < 4; i++){
            var r =  cur[0] + f[i][0]; var c = cur[1] + f[i][1];
            if ((r >= 0 && r < matrix.length) && (c >= 0 && c < matrix[0].length) 
            && (matrix[r][c]== -1 || matrix[r][c] > matrix[cur[0]][cur[1]]+1)) {
                matrix[r][c] = matrix[cur[0]][cur[1]]+1;
                st.push([r,c]);
            }
        }
    }
    return matrix;
}
