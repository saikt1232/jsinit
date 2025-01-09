// we drop the first few items of array 

function drop(arry, n){
    if(!Array.isArray(arry) || arry.length <= 0){
      return new Error("Check your array");
    }

    if(n > arry.length){
      return [];
    }
    
    return arry.slice(n);
}