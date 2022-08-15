
const countCharacters = (S) => 
{
  let count = 0;
  let count2 = 0;
  for(let i = 0; i < S.length; i++){
    if(S[i] === "A"){
      count++;
    }
    if(S[i] === "D"){
      count2++;
    }
  }
  const B = [];
  B.push(count);
  B.push(count2);
  
  return B;
};
 
