/**
 * @param {string} s
 * @return {number}
 */


  /**
   * 执行用时 :68 ms, 在所有 JavaScript 提交中击败了48.35%的用户
   * 内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了50.00%的用户
   */
  var lengthOfLastWord = function(s) {
      //var str =  s.replace(/(^\s*)|(\s*$)/g, "").split(" ");
    var str =  s.trim().split(" ");
    return str.length>0?str[str.length-1].length:0;
};
/**执行用时 :68 ms, 在所有 JavaScript 提交中击败了48.35%的用户
 * 内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了50.00%的用户
 */
var lengthOfLastWord = function(s) {
    s =  s.trim();
     if(s=='') return 0;
     return s.slice(s.lastIndexOf(' ')+1).length;
};
  /**
   * 执行用时 :72 ms, 在所有 JavaScript 提交中击败了32.76%的用户
   * 内存消耗 :34.6 MB, 在所有 JavaScript 提交中击败了10.00%的用户
   */

  var lengthOfLastWord = function(s) {
    var ans = 0,l=0;
    for(var i=0;i<s.length;i++){
        if(s[i]==' '){
            ans>0&&(l=ans);ans=0;
        }else{
            ans++;l=0;
        }
    }
   return Math.max(ans,l);
};