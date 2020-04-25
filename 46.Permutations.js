var permute = function(nums) {
    if(nums==0) return [];
      var len=nums.length,used=[],path=[],ans=[];
      var dfs = function(d){
          if(d==len){ans.push([...path]);//拷贝}
          for(var i=0;i<len;i++){
              if(!used[nums[i]]){//该数字还没被加入path
                  path.push(nums[i]);
                  used[nums[i]] = true;
                  dfs(d+1);
                  path.pop();
                  used[nums[i]] = false;
              }
          }
      }
      dfs(0);
      return ans;
  };
  
  作者：Sun2ama
  链接：https://juejin.im/post/5ea40b2af265da47cb3130ad
  来源：掘金
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。