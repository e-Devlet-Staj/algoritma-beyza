function decryptThis(newStr) {
    var parts = newStr.split(" ");

    for(var i = 0; i < parts.length; i++) {
        var newString = "";
        var regex = /^\d{1,3}/;  // string basındaki 1-3 karakterli sayılar
        var match = regex.exec(parts[i]);
        
        if(match){
            var matched = match[0];
            var asciiChar = String.fromCharCode(matched);  // ascii kod -> char
            var strReplaced = parts[i].replace(matched, asciiChar);

            for(var j = strReplaced.length-1; j > 0; j--) {
                newString += strReplaced[j];
            } 

            parts[i] = asciiChar + newString;
            var joinStr = parts.join(" ");
        } else {} 
    }    
    return (joinStr)
}
decryptThis("72olle")
decryptThis("103doo") 
decryptThis("104olle 119dlro")