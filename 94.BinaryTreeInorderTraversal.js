/**
 * 
 * 递归
 * 执行用时 :76 ms, 在所有 JavaScript 提交中击败了18.79%的用户
 * 内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了86.67%的用户
 */
var inorderTraversal = function(root) {
    var res = [];
    if(root==null) return [];
    var func = function(root){
        if(root.left) func(root.left);
        res.push(root.val);
        if(root.right) func(root.right);
    }
    func(root);
    return res;
};