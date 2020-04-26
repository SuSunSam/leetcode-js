/**
 * @param {number[]} nums
 * @return {boolean}
 */
/** 
 * 暴力
 * 执行用时 :76 ms, 在所有 JavaScript 提交中击败了45.28%的用户
 * 内存消耗 :35.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户
*/ 
var canJump = function(nums) {
    var maxIndex = nums[0];
    for(var i=0;i<nums.length;i++){
        if(i>maxIndex) return false;
        if(i+nums[i]>maxIndex) maxIndex=i+nums[i];
        /**执行用时 :64 ms, 在所有 JavaScript 提交中击败了90.05%的用户
         * 内存消耗 :35.8 MB, 在所有 JavaScript 提交中击败了87.50%的用户 */
        // maxIndex = Math.max(maxIndex,i+nums[i]);
    }
    return true;
};
// dfs 超时
// var canJump = function(nums) {
//     var mark=[],st=[0],cur=0;
//     while(st.length>0){
//         cur = st.pop();
//         if(cur+nums[cur]>=nums.length-1) return true;
//         for(var i=nums[cur];i>1;i--){
//             if(cur-i>0 && mark.indexOf(cur-i)==-1)
//                 st.push(cur-i);
//             if(cur+i<nums.length && mark.indexOf(cur+i)==-1)
//                 st.push(cur+i);
//         }
//         mark.push(cur);
//     }
//     return false;
// };