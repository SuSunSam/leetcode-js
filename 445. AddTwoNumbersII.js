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

var addTwoNumbers = function(l1, l2) {
    var v1=[],v2=[];
    while(l1){v1.push(l1.val); l1 = l1.next;}
    while(l2){v2.push(l2.val); l2 = l2.next;}
    var head=null;
    var temp=0;
    var i=v1.length,j=v2.length;
    while(i>0||j>0){
        temp = (i>0?v1[--i]:0)+(j>0?v2[--j]:0)+temp;
        head = {val:temp%10,next:head};
        temp = temp>9?1:0;
    }
    if(temp==1) head={val:1,next:head};
    return head;
};

