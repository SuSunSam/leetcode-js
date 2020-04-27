/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length-1;
    if(r==0) return nums[0]==target?0:-1;
    m = parseInt((l+r)/2);
    while(l<=r){
        m = parseInt((l+r)/2);
        if(nums[m]==target) return m;
        if(nums[l]<=nums[m]){
            if(target <= nums[m] && target >= nums[l]){
                r = m-1;
            }else{
                l = m+1;
            }
        }else if(nums[m]<nums[r]){
            if(target >= nums[m] && target <= nums[r]){
                l = m+1;
            }else{
                r = m-1;
            }
        }
    }
    return -1;
};
var nums = [4];
for(var i=0;i<5;i++){
    console.log(search(nums,i));
}
