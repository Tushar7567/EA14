//comma operator

//x = (2, 4, 6)
// console.log(x);//x = 6

let x = 1;

x = (x++, ++x)//for postfix it will normally increment the value 
console.log(x);

x = 1;
x = (x++, x++)//exception:in postfix op(right-most value) it will assign the value first (and print)
console.log(x);//x = 3



//-----------------------------------------------------------------------------------------------------
// For Loops

for(let x = 0; x <= 10; x++){
    console.log(x);
}

//Example-2

for(let a = 2; a<=20; a=a+2){
    console.log(a);
}


//While Loop

let count = 1;
while (count <= 10) {
    console.log(count);
    count+=2;
    
}

//Example-1

let q = 2;
while (q <= 20) {
    console.log(q);
    q+=2;
    
}

//Do-while
let w = 2
do{
    console.log(w);//Once statement(do-block) is always executed then condition is checked
    w+=2 
}while (w <= 20); 

//Homework
//1// 7 table like 7 * 1 = 7 
const p = 7;
for(let d = 1; d <= 10; d++){
    
    console.log(p,"*",d,"=",p*d);
}



 let N = 574575;
 N = N - (N % 10);
 console.log(N);
 console.log(N / 10);




 

