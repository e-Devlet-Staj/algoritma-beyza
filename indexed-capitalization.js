// capitalize function / yeniden düzenleme

var str = "";
var arr = []; 
var output = ""

function capitalize(str, arr){
var x = arr.length;   
var i= 0;

for(i; i<x; i++){ 
  var a = str.charAt(arr[i]).toUpperCase()  
  //console.log(a)      
  output+=a
}
console.log(output)
output=""
return output
}

capitalize("abcdef",[1,2,5])  //aBCdeF
capitalize("abcdef",[1,2,5,100]) //aBCdeF
capitalize("xyzt",[0,3]) // Xyzt
capitalize("abcdef",[0,3,4]) // AbcDEf