var isValidBST = function(root) {
    var pre = -Infinity;
    var func = function(root){
        if(root==null) return true;
        if(!func(root.left)) return false;
        if(root.val <= pre) return false;
        pre = root.val;
        if(!func(root.right)) return false;
        return true;
    }
    return func(root);
};