//Create one function with zero parameter having a console statement;

const print = () => {
    console.log("Print fun is successful");
}
print();


//2
//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"


const add = (a,b) => {
    let result = a+b;
    console.log(result);
}
add(44,66);



//3
//Create one arrow function
const write = () =>{
    console.log("JavaScript");
}



//4
var x = 21;
var girl = function (){
   console.log(x);
   var x = 20; 
}
girl();// Output is undefined and x = 21(global scope)




//5
var a = 21;
gol();
console.log(a);// Output is 21 
function gol(){
   console.log(a);// Output is undefined
   var a = 20; 
}



//6
var p = 21;
q();// Output is "q is not defined"(Reference error) 
r();
console.log(q);
q = function(){
    p = 20;
    console.log(p);
};
r = function(){
    p = 40;
    console.log(p);
};




//7
//Write a function that accepts parameter n and returns factorial of n
const factorial = (n) =>{
    let res = 1;
    for(let i = 1; i <= n; i++ ){
        res = res * i;
    }
    console.log(res);//Output is 120
};
factorial(5);

