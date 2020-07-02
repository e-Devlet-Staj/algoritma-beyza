function encryptThis(str) {
    var newReverse = "";
    var parts = str.split(" ");  // birden fazla kelime olabilir

    for (var i = 0; i < parts.length; i++) {        
        var x = parts[i].charCodeAt(0);
        var y = parts[i].substr(1);

        for(var j = y.length - 1; j >= 0; j--) {  // tersine cevir
            newReverse += y[j];        
        }    

        parts[i] = x + newReverse;  
        newReverse = "";           
        var joinle = parts.join(" "); 
    }        
    return joinle
}
encryptThis("Hello")
encryptThis("good") 
encryptThis("hello world") 
encryptThis("abc def ghi xyz")
encryptThis("merhaba dünya")