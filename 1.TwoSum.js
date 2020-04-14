/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var _map = {};var temp;
    for(let i = 0; i < nums.length; i++){
        temp = target - nums[i];
        if(_map[temp]!=undefined){
            return [_map[temp],i];
        }else{
            _map[nums[i]] = i;
        }
    }
};