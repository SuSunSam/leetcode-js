var myPow = function(x, n) {
    var func = function(x,n){
        if(n==0) return 1.0;
        var y  = func(x,parseInt(n/2));
        return n%2?y*y*x:y*y;
    }
    var res = func(x,n);
    return n<0?1/res:res;
};
