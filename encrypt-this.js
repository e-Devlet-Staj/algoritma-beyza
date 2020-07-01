function encryptThis(str){ 
    var newString = ""    

    if (!(str.includes(" "))){  // verilen str tek kelime, icinde bosluk yoksa
    var f = str.charCodeAt(0)  // ilk elemanın ascii kodu
      newString += f
        for(var i=str.length-1; i>0 ; i--){  // kalanı ters cevir
            newString += str[i];        
        }    
    }

    else if (str.includes(" ")){  // verilen kelime icinde bosluk varsa
        var newreverse="";
        var parts = str.split(" ");  // kelimeleri ayrı incelemek icin
        for ( var i = 0; i < parts.length; i++ ){        
            var x = parts[i].charCodeAt(0); 
            var y = parts[i].substr(1);
            for(var j=y.length-1; j>=0 ; j--){
                newreverse += y[j];        
            }            
            parts[i] = x + newreverse;  
            newreverse=""           
            var joinle = parts.join(" ");   
        }         
    }              
    return newString
}
encryptThis("Hello")
encryptThis("good") 
encryptThis("hello world") 
encryptThis("abc def ghi xyz")