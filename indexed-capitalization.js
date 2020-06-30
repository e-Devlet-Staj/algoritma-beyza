// string işlemler uppercase 

var str = "abcdef";

function toUpper(str){
    return str[0] + str[1].toUpperCase() + str[2].toUpperCase() + str[3] + str[4] + str[5].toUpperCase()
}
console.log(toUpper(str))

