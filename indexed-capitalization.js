// capitalize function / yeniden düzenleme // 

var str = "";
var arr = []; 
var output = ""

function capitalize(str, arr){
var x = arr.length;
var y = str.length;    
var i,j= 0;

for (j;j<y;j++){
  if (!(arr.includes(j))){
    var a = str.charAt(j);
    output+=a
  }
  else if (arr.includes(j)){ 
    var b = str.charAt(j).toUpperCase()  
    output+=b
  }
  else
      output += " "   
}

console.log(output)
output=""
return output
}

capitalize("abcdef",[1,2,5])  //aBCdeF
capitalize("abcdef",[1,2,5,100]) //aBCdeF
capitalize("xyzt",[0,3]) // Xyzt
capitalize("abcdef",[0,3,4]) // AbcDEf
capitalize("merhaba",[1,2,9]) // mERhaba
capitalize("abcdefxyztyz",[0,1,3,100]) // ABcDefxyztyz