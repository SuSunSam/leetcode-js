/**
 * @param {string} s
 * @return {number}
 */
/**
 * 执行用时 :172 ms, 在所有 JavaScript 提交中击败了40.58%的用户
 * 内存消耗 :39.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
var romanToInt = function(s) {
    var _map={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000,
    'IV':4,'IX':9, 'XL':40, 'XC':90, 'CD':400, 'CM':900};
    var ans=0;
    var temp=null;
  var i=0;
    for(;i<s.length-1;i++){
        switch(s[i]){
            case 'I':
            case 'X':
            case 'C':
                temp = s[i]+s[i+1];
                if(_map[temp]){
                    ans +=  _map[temp];i++;
                }else{
                    ans += _map[s[i]];
                }
                break;
            default:
             ans += _map[s[i]];
        }
    }
  i==s.length-1 &&(ans += _map[s[i]]);
  return ans;
};

/**
 * 执行用时 :232 ms, 在所有 JavaScript 提交中击败了10.58%的用户
 * 内存消耗 :39.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
var romanToInt = function(s) {
    var _map={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    //'IV':4,'IX':9, 'XL':40, 'XC':90, 'CD':400, 'CM':900
    var ans=0;
    for(var i=0;i<s.length-1;i++){
       _map[s[i]]>=_map[s[i+1]]?ans+=_map[s[i]]:ans-=_map[s[i]];
    }
  ans += _map[s[i]];
  return ans;
};