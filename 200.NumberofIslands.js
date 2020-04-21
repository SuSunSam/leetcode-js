/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid.length==0) return 0;
	var ans=0,lsize = grid.length,wsize = grid[0].length;
    var dfs= function(i,j){
        var s=[];s.push([i,j]);
        while(s.length!=0){
        curr = s.pop();
        grid[curr[0]][curr[1]] = -1;//已访问
        (curr[1]+1<wsize&&grid[curr[0]][curr[1]+1] == 1 ) && s.push([curr[0],curr[1]+1]);
        (curr[0]+1<lsize&&grid[curr[0]+1][curr[1]] == 1 ) && s.push([curr[0]+1,curr[1]]);
            (curr[0]-1>=0&&grid[curr[0]-1][curr[1]] == 1 ) && s.push([curr[0]-1,curr[1]]);
        (curr[1]-1>=0&&grid[curr[0]][curr[1]-1] == 1 ) && s.push([curr[0],curr[1]-1]);
        }
    }
    for(var i=0;i<lsize;i++){
        for(var j=0;j<wsize;j++){
            if(grid[i][j]==1){
                dfs(i,j);ans++;
            }
        }
    }
    return ans;
};

/**
 * 执行用时 :88 ms, 在所有 JavaScript 提交中击败了42.71%的用户
 * 内存消耗 :39.8 MB, 在所有 JavaScript 提交中击败了50.00%的用户
 */
var dy1 = [["1","1","1"],["0","1","0"],["1","1","1"]];
var dy=[[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]];
console.log("ans",numIslands(dy1));