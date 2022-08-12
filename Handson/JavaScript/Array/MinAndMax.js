 
 function arrayMin(arr) {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
      if(min >= arr[i]){
        min = arr[i];
      }
    }
    return min;
  }
  
  function arrayMax(arr) {
    let max = arr[0];
    for(let j = 0; j < arr.length; j++){
      if(max <= arr[j]){
        max = arr[j];
      }
    }
    return max;
  
  }
  
  