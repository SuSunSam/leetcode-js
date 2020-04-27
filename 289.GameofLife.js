/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    if(board.length==0) return null;
    var m=board.length,n=board[0].length, t;
    
    var _board = JSON.parse(JSON.stringify(board));
    
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            t=0;
            if(i>0){
                t += _board[i-1][j] + (j>0?_board[i-1][j-1]+_board[i][j-1]:0)+(j<n-1?_board[i-1][j+1] + _board[i][j+1]:0);
            }else{
                t += (j>0?_board[i][j-1]:0)+(j<n-1?_board[i][j+1]:0);
            }
            if(i<m-1){
                t += _board[i+1][j] + (j>0?_board[i+1][j-1]:0)+(j<n-1?_board[i+1][j+1]:0);
            }
            if( _board[i][j]==1 && (t<2 || t>3))board[i][j]=0;
            else if(_board[i][j]==0 && t==3)board[i][j]=1;
        }
    }
    return board;
};