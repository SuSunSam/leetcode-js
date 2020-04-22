/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var rightSideView = function(root) {
    if(root==null) return [];
    var _s=[],ans=[],t;
    root.h=0; _s.push(root);
    while(_s.length>0){
        t = _s.pop();
        if(t.left!=null){
            t.left.h = t.h+1;
            _s.push(t.left);
        }
        if(t.right!=null){
            t.right.h = t.h+1;
            _s.push(t.right);
        }
        ans[t.h]==undefined &&(ans[t.h] = t.val) ;
    }
    return ans;
};

/**
 * 遍历
 * 执行用时 :80 ms, 在所有 JavaScript 提交中击败了23.60%的用户
 * 内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户炫耀一下:
 */