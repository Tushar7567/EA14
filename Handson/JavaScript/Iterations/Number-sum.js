
const Number_Sum = (N) => 
{
  let sum = 0;
  
  while(N > 0){
    let rem = N % 10;
    sum+=rem;
    N = N - rem;
    N = N / 10;
  }
  return sum;
};

