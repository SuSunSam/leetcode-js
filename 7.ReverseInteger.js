/**
 * 执行用时 :84 ms, 在所有 JavaScript 提交中击败了82.97%的用户
 * 内存消耗 :36 MB, 在所有 JavaScript 提交中击败了72.17%的用户
 */
var reverse = function(x) {
    var re = (x)=>{
        return parseInt(x.toString().split("").reverse().join(""));
    }
    var res = x<0?-re(-x):re(x);
    return (res<(Math.pow(2,31)-1) && res>-Math.pow(2,31))? res:0;
};
/**
 * 执行用时 :84 ms, 在所有 JavaScript 提交中击败了82.97%的用户
 * 内存消耗 :35.5 MB, 在所有 JavaScript 提交中击败了98.26%的用户
 */
var reverse = function(x) {
    var re = (x)=>{
        var res = 0;
        while(x > 0){
            res = res*10 +x %10;
            x = (x-x%10)/10;
        }
        return res;
    }
    var res = x<0?-re(-x):re(x);
    return (res<(Math.pow(2,31)-1) && res>-Math.pow(2,31))? res:0;
};