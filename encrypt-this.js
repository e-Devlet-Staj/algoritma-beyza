function encryptThis(str){ 
    var newString = ""; 
    var newreverse = "";
    var parts = str.split(" "); // birden fazla kelime olabildigi icin
        for ( var i = 0; i < parts.length; i++ ){        
            var x = parts[i].charCodeAt(0); 
            var y = parts[i].substr(1);
            for(var j=y.length-1; j>=0 ; j--){
                newreverse += y[j];        
            }            
            parts[i] = x + newreverse;  
            newreverse="";           
            var joinle = parts.join(" ");   
        }       
    return newString
}
encryptThis("Hello")
encryptThis("good") 
encryptThis("hello world") 
encryptThis("abc def ghi xyz")
encryptThis("merhaba dünya")