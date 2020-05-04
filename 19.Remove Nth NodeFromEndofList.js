/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 遍历两次
    var len = 0, cur = head;
    while(cur){
        len++; cur = cur.next;
    }
    cur = head;
    if(len == n) return head.next;
    while(--len-n){ cur = cur.next;}
    cur.next = cur.next.next;
    return head;
};

/**
 * 
 * 执行用时 :76 ms, 在所有 JavaScript 提交中击败了41.63%的用户
 * 内存消耗 :34 MB, 在所有 JavaScript 提交中击败了93.75%的用户
 */
var removeNthFromEnd = function(head, n) {
    var cur = head,curn = head;
    while(n--){ curn = curn.next;}
    if(curn==null) return head.next;
    while(curn.next){
        cur = cur.next; curn = curn.next;
    }
    cur.next =  cur.next.next;
    return head;
};