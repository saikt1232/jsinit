function chunks(array, size){
    //check if array -> return error if not
    // check size is greater than 0 -> empty array no use -> return console.error
  
    // start at index 0 and this keeps moving
    // [1,2,3,4] -> [[1,2],[3,4]]
  
    if(!Array.isArray(array) || array.length <= 0){
      return new Error("Check your array");
    }
  
    let arrayLength = array.length;
    let index = 0;
    let result = [];
  
    while(index < arrayLength){
      result.push(array.slice(index, index+size));
      console.log(result);
      index += size;
    }
  
    return result;
  }

  
  console.log(chunks([1,2,3,5,6,8,9,10],3));