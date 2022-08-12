
const highAge = (N, Arr) => 
{
   const Age =[];
   for(const values of Arr){
     if(values >= 18){
       Age.push(values);
     }
   }
   return Age;
};
 
