/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var l=1;
    for(var i=1;i<nums.length;i++){
        if(nums[i]!=nums[i-1]){
            l!=i && (nums[l]=nums[i]);
            l++;
        }
    }
    return l;
};