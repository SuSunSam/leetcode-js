/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.st = [];
    this.minst =[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.st.push(x);
    if(this.minst.length!=0)
        this.minst.push(Math.min(x,this.minst[this.minst.length-1]));
    else this.minst.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.st.pop();
    return this.minst.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.st[this.st.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minst[this.minst.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */