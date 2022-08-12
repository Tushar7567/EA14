
const findEvenOdd = (N, Arr) => 
{
  let sumEven = 0;
  let sumOdd = 0;
  const B = [];
  for(const values of Arr){
    if(values % 2 === 0){
      sumEven = sumEven + values;
    }
    else{
      sumOdd = sumOdd + values;
    }
  }
  B[0] = sumEven;
  B[1] = sumOdd;
  
  return B;
  
};
 
