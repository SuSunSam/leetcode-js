/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var t=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]!=val){
            t!=i && (nums[t]=nums[i]);
            t++;
        }
    }
    return t;
};
/**
 * 执行用时 :52 ms, 在所有 JavaScript 提交中击败了99.15%的用户
 * 内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了92.86%的用户
 * 
 */

