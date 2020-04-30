/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var _map={}, t;
    while(true){
        t=n; n=0;
        while(t>0){
            n += (t%10)*(t%10);
            t = (t-t%10)/10;
        }
        if(n==1) return true;
        if(_map[n] == 1) return false;
        _map[n] = 1;
    }
    return false;
};

/**
 * 快慢指针
 */
var isHappy2 = function(n) {
    var getNextNumber = (num)=>{
        let t=num; num=0;
        while(t>0){
            num += (t%10)*(t%10);
            t = (t-t%10)/10;
        }
        return num;
    }
    var k=getNextNumber(n),m = n;
    while(true){
        if(k == 1 || m == 1) return true;
        if(k == m) return false;
        k = getNextNumber(getNextNumber(k));
        m = getNextNumber(m);
    }
};

// 数学法
var isHappy3 = function(n) {
    var t=0;
     while (n != 1 && n != 4) {
         t=n; n=0;
         while(t>0){
             n += (t%10)*(t%10);
             t = (t-t%10)/10;
         }
     }
     return n == 1;

 };
 console.log(isHappy(19));