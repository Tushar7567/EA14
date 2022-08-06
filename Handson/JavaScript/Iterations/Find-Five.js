
const Find_Five = (N) => 
{
  let count = 0;
	while(N > 0){
	  let x = N % 10;
	  if(x == 5){
	     count++;
	   }
	   N = N - x;
	   N=N/10;
	 }
	 return count;
};

