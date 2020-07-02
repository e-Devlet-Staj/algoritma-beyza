function capitalize(str, arr) {
  var output = "";
  
  for (var j = 0; j < str.length; j++) {
    if (!(arr.includes(j))) {
      var a = str.charAt(j);
      output += a;
    } else if (arr.includes(j)) {
      var b = str.charAt(j).toUpperCase();  
      output += b;
    } else {
      output += " ";
    }  
  } 
  return output;
}
capitalize("abcdef",[1,2,5])  //aBCdeF
capitalize("abcdef",[1,2,5,100])  // aBCdeF
capitalize("xyzt",[0,3])  // Xyzt
capitalize("abcdef",[0,3,4])  // AbcDEf
capitalize("merhaba",[1,2,9])  // mERhaba
capitalize("abcdefxyztyz",[0,1,3,100])  // ABcDefxyztyz