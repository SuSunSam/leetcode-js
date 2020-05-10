var lengthOfLongestSubstring = function(s) {
    if(s.length==0) return 0;
    var _map={}, ans = 1,l = -1;
    for(var i=0;i<s.length;i++){
        if(_map[s[i]]!=undefined){
            l = Math.max(l,_map[s[i]]);
        }
        _map[s[i]]  = i;
        ans = Math.max(ans,i-l);
        
    }
    return ans;
};
console.log(lengthOfLongestSubstring("abbcba"))