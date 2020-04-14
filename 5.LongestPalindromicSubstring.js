/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    var ans = 1,start=0;
    if(s==null || s.length < 2) return s;
    var getLongestPalindrome = function(l,r){
        let i=0,temp;
        while(l-i>=0 && r+i<s.length && s[l-i]==s[r+i]){
        	temp=(r-l+1)+2*i;
            if(ans<temp){ans=temp;start = l-i;};
            i++;
        }
    }
    for(let ii = 0;ii<s.length;ii++){
        getLongestPalindrome(ii,ii);
        getLongestPalindrome(ii,ii+1);
    }
    return s.substring(start,ans+start);
};