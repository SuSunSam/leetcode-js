/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var _s=[];
    for(let i=0;i<s.length;i++){
        if(s[i]=='(' || s[i]=='[' ||s[i]=='{'){
            _s.push(s[i]);
        }else{
            if(s[i]==')' && _s.pop()!='('){
                return false;
            }
            if(s[i]==']' && _s.pop()!='['){
                return false;
            }
            if(s[i]=='}' && _s.pop()!='{'){
                return false;
            }
        } 
    }
    if(_s.length!=0) return false;
    return true;
};