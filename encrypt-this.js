function encryptThis(str){     
    var newreverse = "";
    var parts = str.split(" "); // birden fazla kelime olabildigi icin
        for ( var i = 0; i < parts.length; i++ ){        
            var x = parts[i].charCodeAt(0); // ilk karakterin ascii kodunu al
            var y = parts[i].substr(1);  // kalan kısmı y'ye ata
            for(var j=y.length-1; j>=0 ; j--){  // tersine cevir
                newreverse += y[j];        
            }            
            parts[i] = x + newreverse;  // ascii kodu + ters sifre  
            newreverse="";           
            var joinle = parts.join(" ");  // birlestir - birden fazla kelime durumu 
        }        
    return joinle
}
encryptThis("Hello")
encryptThis("good") 
encryptThis("hello world") 
encryptThis("abc def ghi xyz")
encryptThis("merhaba dünya")