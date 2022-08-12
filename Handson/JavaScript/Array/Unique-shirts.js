
function Unique_Shirts (arr,N) {

    let res = arr.filter(items => (arr.indexOf(items) === arr.lastIndexOf(items)));
    return res.length;
   
  }
  
  