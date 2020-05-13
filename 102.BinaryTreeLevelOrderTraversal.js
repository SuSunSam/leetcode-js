/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null) return [];
    var res = [],st = [root,null];
    while(st.length>1){
        var t = [];
        while(true){
            var node = st.shift();
            if(node == null) break;
            t.push(node.val);
            node.left && (st.push(node.left));
            node.right && (st.push(node.right));
        }
        res.push(t);
        st.push(null);
    }
    return res;
};