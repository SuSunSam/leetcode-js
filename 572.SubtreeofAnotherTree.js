/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t){
   return  (JSON.stringify(s).indexOf(JSON.stringify(t)))>-1;
}

var isSubtree = function(s, t) {
    var sOrder = [], tOrder= [];
    var getPreorder = function(t,order){
        order.push("v"+t.val);
        if(t.left){ getPreorder(t.left,order);
        }else{ order.push('l'); }
        if(t.right){ getPreorder(t.right,order);
        }else{ order.push('r'); }
    }
    getPreorder(s,sOrder);
    getPreorder(t,tOrder);
    sOrder = sOrder.join();
    tOrder = tOrder.join();
    return sOrder.indexOf(tOrder)>-1;
};