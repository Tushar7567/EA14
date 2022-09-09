//Arguments
function add(a,b){// a & b are Parameters
    let result = 0;
    result = a + b;
    console.log(result);
}

add(5,5);// 5 is arguments


//Arrow Function
const addition = (a,b) => { //Keep the function as CONST(SUGGESTED)
    let res = a + b;
    console.log(res);
} 
console.log(addition);
addition(77,23);


//Function Expressions
const print = function(){
    console.log("Function Expresion");
}
console.log(print);
print();


const adding = (a,b) => {
    let result = a+b;
    return result;
}
let finalresult = adding(33,55);
console.log(finalresult);



//---------------------------------------------------------------------------------------------
//let and const are block scope

let a = 15;
const b = 30;
var c = 5;//var is global scope
{
    let a = 10;
    console.log(a);//10
    const b = 20;
    console.log(b);//20
    var c = 7;
    console.log(c);//7  value is overridden



}
console.log(a);//15
console.log(b);//30
console.log(c);//7

//Shadowing 
//Legal Shadowing (this is allowed )


var d = 20;
console.log(d);//20
{
    let d = 30;
    console.log(d);//30
}
console.log(d);//20


//Iilegal Shadowing
// this will give error
// let d = 20;
// console.log(d);//20
// {
//      var d = 30;
//     console.log(d);//30
// }
// console.log(d);//20



//Lexical environment

let f = 10;
function one(){
    let f = 15;
   console.log("one",f);//15

    two();
    function two(){
        let g = 20;
        console.log( "two",f,g);//15,20,

        three();
        function three(){
            let h = 30;
            console.log( "three",f,g,h);//15,20,30
        }
        console.log( "two",f,g);//15,20
        console.log(f);//15
        four();
        function four(){
            let i = 40;
            console.log("four",f,i);//15,40
        }
    }
}
one();
    


//What are Functions