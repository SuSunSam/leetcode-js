/**
 * 执行用时 :68 ms, 在所有 JavaScript 提交中击败了66.70%的用户
 * 内存消耗 :34.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
var reverseWords = function(s) {
    return s.trim().split(" ").filter(item => item).reverse().join(' ');
};