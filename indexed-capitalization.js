// string işlemleri js

var str = "abcdef";

var result  = str.charAt(1).toUpperCase()
var result1 = str.charAt(2).toUpperCase()
var result2 = str.charAt(5).toUpperCase() 

var newStr = str.charAt(0) + result + result1 + str.charAt(3) + str.charAt(4) + result2

console.log(newStr)

