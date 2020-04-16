/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var ans  = nums[0];
    for(var i=1;i<nums.length;i++){
        nums[i-1]>0 && (nums[i]+=nums[i-1]);
        nums[i]>ans && (ans=nums[i]);
    }
    return ans;
};

/**
 * 执行用时 :76 ms, 在所有 JavaScript 提交中击败了46.74%的用户
 * 内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
