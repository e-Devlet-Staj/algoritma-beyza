function prod_int_part(product) {    
    var productArr= new Array();  

    //sayının asal sayı olup olmadığı kontrol edilir
    for(let i = 2; i < product; i++) {
        var notPrime = product % i;
        
        // bölenleri diziye aktarılır
        if( notPrime == 0) {
            productArr.push(i);
        }
    }

    var count = productArr.length;

    if(count == 0) {
        return [0, []];
    } 

    // productFirstParts: sayının bölünebildiği en küçük sayılar ile çarpanlarına ayrılması
    var productFirstParts = productArr.map(item => [item, product / item].sort((a,b) => a-b)); 
    var dividedNum = new Array();
    var littleNum = productFirstParts[0][0];
    dividedNum.push(littleNum);
    var number = productFirstParts[0][1];
    var squart = Math.sqrt(number);
    
    // asal olma durumuna göre çarpanlarına ayırma
    // (2 x 17) -> 17 asal, carpanı yok
    var counter = 0;
    for(let j = 2; j < number; j++) {
        var prime = number % j;

        if(prime == 0) {
             counter++;
        }
    }    

    if(counter == 0) {
        dividedNum.push(number);
    } else { 
        let divider = 2;  
        
        // asal carpanlarına ayırma
        // (2 x 15) -> (2 x 3 x 5)
        while(number > 1) {            
            if(number % divider == 0) {
                dividedNum.push(divider);
                number = number / divider;
            } else {
                divider = divider + 1;
            }
        }
    }

    // productParts: kaç farklı sekilde carpanlarına ayrılabildiği hesabı 
    var productParts = productArr.map(item => [item, product /item].sort((a, b) => a - b))
        .concat(productArr.filter(item => prod_int_part(item)[0] !== 0)
                .map(item =>
                  {
                      var x= prod_int_part(item);
                      x[1].push(product / item);
                      return x[1].sort((a, b) => a - b);
                  })).sort(); 

    // (2 x 16) -> (2 x 4 x 4), (2 x 81) -> (2 x 9 x 9)
    number = productFirstParts[0][1];
    if(number % squart == 0) {
        productParts.push([littleNum, squart, squart]);
        productParts.sort((a, b) => b.length - a.length); 
    }

    // productParts'taki elemanları düzenleme 
    var partitionArr = new Array();
    for(let z = 0; z < productParts.length-1; z++) {
      let different = 0;
      
      if(productParts[z].length != productParts[z+1].length) {
         partitionArr.push(productParts[z]); 
      } else {
         for(let j = 0; j < productParts[z].length; j++) {
            different = different + (productParts[z][j] - productParts[z+1][j]);
         }

         if(different !== 0) {
            partitionArr.push(productParts[z]);
         }
      }   
   }    

    partitionArr.push(productParts[productParts.length-1]); 
    // çarpım yapılan sayılar sıralanır
    partitionArr.sort((a, b) => a.length - b.length);  
    return [partitionArr.length, dividedNum];
}
prod_int_part(17)
prod_int_part(18)
prod_int_part(54)
prod_int_part(60)
prod_int_part(32)
prod_int_part(162)