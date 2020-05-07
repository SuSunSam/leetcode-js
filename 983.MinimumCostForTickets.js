var mincostTickets = function(days, costs) {
    var dp = [0],len = days.length-1;
    for(var i = 1; i <= days[len]; i++){
        if(!days.includes(i)){
            dp[i] = dp[i-1];
        }else{
            dp[i] = Math.min(
               dp[Math.max(0,i-1)]+costs[0],
               dp[Math.max(0,i-7)]+costs[1],
               dp[Math.max(0,i-30)]+costs[2]);
        }
    }
   return dp[dp.length-1];
};