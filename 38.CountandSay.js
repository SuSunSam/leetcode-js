/**
 * @param {number} n
 * @return {string}
 */
var func1 = function(s){
	var str="",t=1;
  
  for(var i=1;i<s.length;i++){
    if(s[i]!=s[i-1]){
      str+=t+s[i-1];t=1;
    }else{t++;}
  }
  i=i-1;
  str+= (s[i]==s[i-1]?t+s[i]:"1"+s[i]);
  return str;
}

var countAndSay = function(n) {
  if(n==0) return "1";
  var str = "1";
  while(--n){
      str = func1(str);
  }
   return str;
};
