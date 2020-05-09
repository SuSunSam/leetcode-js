var mySqrt = function(x) {
    var l = 0, r = x,m,ans=-1;
    while(l<=r){
        m = parseInt((l+r)/2);
        if(m*m <= x){
            ans = m; l = m+1;
        }else{
            r = m-1;
        }
    }
    return ans;
};