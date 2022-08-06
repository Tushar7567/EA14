
const Find_Digits = (N) => 
{
  let count = 0;
	do{
	  N = N/10;
	  count++;
	}while(N >= 1) 
	return count;
};

