 
var Check_Leap = (year) => 
{
 if(year % 400 === 0){
   return `Leap Year`;
 }
 else if(year % 100 === 0){
   return `Non Leap Year`;
 }
 else if(year % 4 === 0){
   return `Leap Year`;
 }
 else{
   return `Non Leap Year`;
 }


};
 
