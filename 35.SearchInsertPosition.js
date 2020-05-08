/**
 * 遍历 72ms，34.3MB
 */
var searchInsert = function(nums, target) {
    if(target<=nums[0]) return 0;
    for(var i=0;i<nums.length-1;i++){
        if(nums[i]<target && nums[i+1]>=target){
            break;
        }
    }
    return i+1;
};
/**
 * 二分
 * 执行用时 :68 ms, 在所有 JavaScript 提交中击败了57.91%的用户
 * 内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了95.65%的用户
 */
var searchInsert = function(nums, target) {
    var m,l=0,r=nums.length-1;
    while(l<=r){
        m = parseInt((l+r)/2);
        if(target == nums[m]) {
            return m;
        }else if(nums[m] < target){
            l = m+1;
        }else{ 
            r = m-1;
        }
    }
    return l;
};