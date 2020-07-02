function decryptThis(newStr){
    var newString = "";  
    var parts = newStr.split(" ");   

    for(var i = 0; i< parts.length; i++){
        var regex = /^\d{1,3}/;  // string basındaki 1-3 karakterli sayılar
        var match = regex.exec(parts[i]); // string icinde regex ara
        if(match){  // eger aranan ifade yer alıyorsa
            var matched = match[0];        
            var ascii_char = String.fromCharCode(matched);  // ascii kod -> char
            var newss = parts[i].replace(matched,ascii_char);                 
            
                for(var j=newss.length-1; j>0 ; j--){
                    newString += newss[j];        
                } 
            
            parts[i] = ascii_char + newString;            
            newString="";         
            var join_s = parts.join(" ");                      
        } else {
            // aranan ifadenin string icerisinde yer almama durumu
            // sifreli degil
        } 
    }    
    return (join_s)
}

decryptThis("72olle")
decryptThis("103doo") 
decryptThis("104olle 119dlro") 