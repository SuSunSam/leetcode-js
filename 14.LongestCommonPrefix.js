/**
 * 最长公共前缀
 * 执行用时 :84 ms, 在所有 JavaScript 提交中击败了21.00%的用户
 * 内存消耗 :34.9 MB, 在所有 JavaScript 提交中击败了75.76%的用户
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0) return "";
    if(strs.length==1) return strs[0];
    strs.sort((a,b)=>{return a.length-b.length;});
  
    var j=0,i=strs.length;
    for(j=0;j<strs[0].length && i==strs.length;j++){
        for( i = 0; i < strs.length && strs[i][j]==strs[0][j];i++){
        }
    }
    return j==strs[0].length &&i==strs.length? strs[0].slice(0,j):strs[0].slice(0,j-1);
};