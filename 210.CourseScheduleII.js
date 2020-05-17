/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var tp = new Array(numCourses).fill(0), res = [];
    for(let i = 0; i < prerequisites.length; i++){
        tp[prerequisites[i][0]] ++;
    }
    while(true){
        let t = -1;
        for(let i = 0; i < numCourses; i++){
            if(tp[i] == 0){
                t=i;
                break;
            }
        }
        if(t!=-1){ 
            res.push(t); 
            tp[t]=-1;
        }else{
            break;
        }
        for(let i = 0; i < prerequisites.length; i++){
            if(prerequisites[i][1] == t){tp[prerequisites[i][0]]--;}
        }
    }
    return res.length==numCourses?res:[];
};