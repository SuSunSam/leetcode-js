var swapPairs = function(head) {
    var cur = new ListNode(), temp;
    cur.next = head; head = cur;
    var swap = function(l1){
        if(l1.next){
            temp = l1; l1 = l1.next;
            temp.next = l1.next;
            l1.next = temp;
        }
        return l1;
    }
    while(cur.next!=null){
        cur.next = swap(cur.next);
        if(cur.next.next) cur = cur.next.next;
        else break;
    }
    return head.next;
};