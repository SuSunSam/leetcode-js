/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var func = function(t){
        var l=0,r = s.length-1, flag = true;
        while(l<r){
            if(s[l]==s[r]){
                l++; r--;
            }else{
                if(flag){
                    flag = false; t?l++:r--;
                }else{
                    return false;
                }
            }
        }
        return true;
    }
    
    return func(true) ||func(false);
};