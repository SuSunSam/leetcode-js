/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var ans={val:0,next:null},cur=ans;
    while(l1&&l2){
        if(l1.val<=l2.val){
            cur.next={val:l1.val,next:null};
            cur=cur.next;
            l1=l1.next;
        }else{
            cur.next={val:l2.val,next:null};
            cur=cur.next;
            l2=l2.next;
        }
    }
    cur.next=l1?l1:l2;
    return ans.next;
};