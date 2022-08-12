
const findCount = (N, K, Arr) => 
{
   let count = 0;
   for(const value of Arr){
     if(value === K){
       count++;
     }
   }
   return count;
};
 
