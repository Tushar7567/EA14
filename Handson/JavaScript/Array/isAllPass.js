
const isAllPass = (N, Arr) => 
{
  let count = 0; 
  for(const value of Arr){
    if(value >= 32){
      count = 1;
    }
    else{
      count = 0;
      break;
    }
  }
  if(count === 1){
    return "YES";
  }else{
    return "NO";
  }
};
 
