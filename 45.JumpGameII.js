var jump = function(nums) {
    if(nums.length<=2) return 1;
    var cur = 0, res = 0, t;
   while(cur+nums[cur]<nums.length-1){
       // t:最远跳到多远
       for(var i=1,t=1;i<=nums[cur];i++){
           if(i+nums[cur+i] > t + nums[cur+t]){
                t=i;
           }
       }
       cur += t;res++;
   }
    return res+1;
};
