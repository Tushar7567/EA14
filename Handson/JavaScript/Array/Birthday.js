 
function Birthday_Game(arr,D ,M) {
 
    let count = 0;
    for(let i = 0; i < arr.length; i++){
      let smallarr = arr.slice(i,i+M);
      if(smallarr.length === M){
        let sum = smallarr.reduce((acc,curr) => acc+curr,0);
        if(sum === D){
          count++;
        }
      }
    }
    return count;
  }
  
  