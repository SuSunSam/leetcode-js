/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    var ret = 0;
    for(let n of nums){ret ^= n;}
    let i = 1;
    while((i & ret)==0){i <<= 1;}
    let a = 0, b = 0;
    for(let n of nums){
        if(i & n) a ^= n;
        else b ^= n;
    }
      return [a,b];
  };
  