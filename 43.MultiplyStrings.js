// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var multiply = function(num1, num2) {
    
//     if(num1.length<num2.length) return multiply(num2, num1);
//     var t = 0, l = num1.length - num2.length;
//     for(var i = num2.length-1; i>=0; i--){
//         t = num1[i+l] * num2[i] + t;
//         // console.log(num1[i+l],"*",num2[i],"=",num1[i+l] * num2[i]);
//         console.log("t=",t);
//         num1 = num1.substring(0,i+l) + t%10 + num1.substring(i+l+1);
//         console.log("num1[i+l]=",num1[i+l]);
//         t = (t-num1[i+l])/10;
//     }
//     console.log("num1=",num1);
//     if(t > 0){
//         if(num1.length == num2.length){
//             num1 = t.toString()+num1;
//         }else{
           
//             num1[l-1] = (parseInt(num1[l-1]) + t);

//         }
//     }
//    return num1;
   
// };
// console.log(multiply("12","2"));