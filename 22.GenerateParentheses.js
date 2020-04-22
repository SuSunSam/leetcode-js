/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * 括号生成
 * 
 * 1. ()-(())  - (()()),((())),(())()
 *      -()()  - (())(),()()(),()(())
 *  set去重
 * 
 * 执行用时 :76 ms, 在所有 JavaScript 提交中击败了35.06%的用户
 * 内存消耗 :36.8 MB, 在所有 JavaScript 提交中击败了12.50%的用户
 */
var fun1 = function(s){
    let ans = new Set();
    for(let temp of s){
        for(var j=0;j<temp.length;j++){
           ans.add(temp.slice(0,j-1)+"()"+temp.slice(j-1));
        }
    }
    return ans;
}

var generateParenthesis = function(n) {
    if(n==0) return [];
    let s = new Set();s.add("()");
    while(--n){
        s = fun1(s);
    }
    return [...s];
};

/**
 * 动态规划
 * 
 * 执行用时 :72 ms, 在所有 JavaScript 提交中击败了49.24%的用户
 * 内存消耗 :34.9 MB, 在所有 JavaScript 提交中击败了87.50%的用户
 */
var generateParenthesis = function(n) {
    let res = [];
    let dfs = (s, left, right)=>{
        if(left ==n &&right==n) return res.push(s);
        if(left < n) dfs(s+'(', left+1, right);
        if(right < left) dfs(s+')', left, right+1);
    }
    dfs('', 0, 0);
    return res;
};