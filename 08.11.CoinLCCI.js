/**
 * @param {number} n
 * @return {number}
 */
let waysToChange = (n)=> {
    let dp = new Array(n+1).fill(1)
    let coins = [1,5,10,25]
    for(let i=1; i<4; i++){
        for(let j=1; j<=n; j++){
            if(j-coins[i]>=0){
                dp[j] = (dp[j]+dp[j-coins[i]]) % (1e9+7)
            } 
        }
    }
    return dp[n];
};

/**
 * 执行用时 :140 ms, 在所有 JavaScript 提交中击败了80.00%的用户
 * 内存消耗 :49.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */