/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var dp = [nums[0]], ln = nums[0]<0?0:-1, res = nums[0];
    for(var i=1;i<nums.length;i++){
        dp[i] = nums[i];
        if(nums[i]>0 && dp[i-1]>0){
            dp[i] *= dp[i-1];
        }else if(nums[i] <0){
            if(ln>=0){
                for(var j=ln;j<i;j++){
                    dp[i] *= nums[j];
                }
                if(ln>0 && dp[ln-1]>1) dp[i] *= dp[ln-1];
            }
            ln = i;
        }
        res = Math.max(res,dp[i]);
    }
    return res;
};