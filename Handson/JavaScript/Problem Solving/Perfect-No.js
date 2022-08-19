 
var Perfect_Check = (N) => 
{
  let sum = 1;
  for(let i = 2; i < N; i++){
    if(N % i === 0){
      sum+=i;
    }
  }
  if(sum === N){
    return `YES`;
  }else{
    return `NO`;
  }
        
};
 
