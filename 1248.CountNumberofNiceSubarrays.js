var numberOfSubarrays = function(nums, k) {
    if(nums.length<k) return 0;
    var ans=0, odd=[-1],index=1;
    for(let i =0;i<nums.length;i++){
        nums[i]%2 && (odd[index++]=i);
    }
    odd[index] = nums.length;
    for(let i=1;i<odd.length-k;i++){
        ans += (odd[i]-odd[i-1])*(odd[i+k]-odd[i+k-1]);
    }
    return ans;
};
/**
 * 执行用时 :116 ms, 在所有 JavaScript 提交中击败了60.00%的用户
 * 内存消耗 :48.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 * 
 * nums = [1,1,2,1,1], k = 3
 * odd = [-1,0,1,3,4,5]
 * 
 * nums = [2,2,2,1,2,2,1,2,2,2], k = 2
 *         - - - {     } - - -
 * odd = [-1, 3, 6, 10]
 */