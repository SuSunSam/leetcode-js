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
    var temp = 0,v1=0;v2=0;
    var ans = {val:-1,next:null};
    var cur = ans;
    while(l1||l2){
        v1=l1?l1.val:0; v2=l2?l2.val:0;
        temp += v1+v2; 
        cur.next = {val: temp%10,next:null};
        temp =  (temp-cur.next.val)/10;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
        if(cur.next) cur = cur.next;
    }
    if(temp) cur.next = {val:1,next:null};
    return ans.next;
};

var addTwoNumbers = function(l1, l2) {
    var temp = 0;
    var ans = l1;
    while(true){
        temp = l1.val+l2.val+temp;
        l1.val = temp%10;
        temp = (temp - l1.val)/10;
        if(l1.next!=null&&l2.next!=null){
           l1 = l1.next;l2 = l2.next;
        }else{
          break;
        }
    }
    if(l2.next){l1.next = l2.next;}
  	if(l1.next){
        l1=l1.next;
    	while(true){
        	temp = l1.val+temp;
        	l1.val = temp%10;
        	temp = (temp - l1.val)/10;
        	if(l1.next)l1 = l1.next;
          else break;
    	}
    }
    if(temp==1){
        l1.next={val:1,next:null};
    }
    return ans;
};