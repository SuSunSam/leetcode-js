/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var l = 0,r = height.length-1;
    var temp = 0,ans = 0;
    while(l<r){
        temp = (r-l)*(Math.min(height[l],height[r]));
        ans<temp &&(ans=temp);
        height[l]<height[r]?l++:r--;
    }
    return ans;
};