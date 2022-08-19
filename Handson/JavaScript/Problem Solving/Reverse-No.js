 
var Reverse_Number = (N) => 
{
  let rev = 0;
  while(N>0){
    let dig = N % 10;
    rev = (rev*10)+dig;
    N = parseInt(N/10);
  }
  return rev

};
 
