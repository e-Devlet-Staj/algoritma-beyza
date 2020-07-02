function decryptThis(newStr) {
    var newString = "";  
    var parts = newStr.split(" ");   

    for(var i = 0; i < parts.length; i++) {
        var regex = /^\d{1,3}/;  // string basındaki 1-3 karakterli sayılar
        var match = regex.exec(parts[i]);
        
        if(match){
            var matched = match[0];        
            var asciiChar = String.fromCharCode(matched);  // ascii kod -> char
            var strReplaced = parts[i].replace(matched, asciiChar);

                for(var j = strReplaced.length - 1; j > 0; j--) {
                    newString += strReplaced[j];        
                } 

            parts[i] = asciiChar + newString;            
            newString = "";         
            var join_s = parts.join(" ");                      
        } else {} 
    }    
    return (join_s)
}
decryptThis("72olle")
decryptThis("103doo") 
decryptThis("104olle 119dlro") 