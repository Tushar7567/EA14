// Q1.What is a Temporal Dead Zone?

// It is a period of time in which let and const variable cannot be accessed
// So to access we have to move the declaration to the top of the scope



// What is the for-in loop in JavaScript? Give its syntax

// // The for..in loop in JavaScript allows you to iterate over all property keys of an object.
// for (key in object) {
//     // body of for...in
// }




// Q3.Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

// local and functional scope are same

// Global scope: Variables declared outside of all functions are known as global variables and in the global scope. Global variables are accessible anywhere in the program.
// Function scope: Variables that are declared inside a function are called local variables and in the function scope. Local variables are accessible anywhere inside the function.  
// Block scope: Variable that is declared inside a specific block & can’t be accessed outside of that block. In order to access the variables of that specific block, we need to create object for it.





// What is difference between null and undefined and where to use what?

// Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript.
// its type is Object

// Undefined: It means the value does not exist in the compiler. It is the global object.
// its type is undefined





// what is Symbol?

// A Symbol() method always return a unique value.
// A symbol value may be used as an identifier for object properties.
// Symbols are immutable, just like numbers or strings.
// Symbols cannot be typecasted to primitive data types.




// Write code to explain map and filter in arrays

// these are all array methods in js. It iterrateover an array and perform a particular task
const arr =[1,2,3,4,5,6,7,23,45,2,55,77,24,6,872,66];

// const ar1 = arr.map(item => item*2);
// const ar1 = arr.filter(item => item>50);




// Explain passed by value and passed by reference

// Paassed by value: primitive datatypes

//let a=10;
// let b=a;

// b=a+5;
// clg(b); clg(a)


// Passed by reference: non-primitive

// let obj1 ={
//     name: 'sirrr',
//     age: 34,
// }
// let obj2 = obj1;
// obj2.age = 20;
// clg(obj2);





// Please explain Self Invoking Function and its code

// The self-invoking function in JavaScript are known as Immediately Invoked Function Expressions (IIFE). 
// Immediately Invoked Function Expressions (IIFE) is a JavaScript function that executes immediately 
// after it has been defined so there is no need to manually invoke IIFE.

// (function () {
//     //body of iife
// })();




// What is an event loop and call stack

// CallStack is a data structure which keeps track of function calls in our program.
//  When ever we call a function for its execution, we are pushing it to the stack. 
//  It is popped out of the stack when the execution is completed.

// Event Loop : It has responsibility to see weather the call-stack is empty and does 
// the task queue contains pending task to process. If the call-stack is empty, 
// it will push the task to the call-stack from the queue and the task gets processed.


// Any parameter that is passed to a function that listening to event is called event parameter 