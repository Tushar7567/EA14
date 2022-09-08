// Q1. Difference between “ == “ and “ === “ operators.

// The main difference between the == and === operator in javascript 
// is that the == operator does the type conversion of the operands before comparison,
//  whereas the === operator compares the values as well as the data types of the operands.
//---------------------------------------------------------------------------------------------------------

// Q2. What is the spread operator?

// Spread syntax (...) allows an iterable, such as an array or string, 
// to be expanded in places where zero or more arguments are expected. 

//---------------------------------------------------------------------------------------------------------



// Q3 What are the differences between var, let and const?

// let - 1. we can declare the variable name in one line and initialize it on another line
// or in the same line itself.
// 2. Two variables with same name aren't possible with let
// 3. We can reassign/update the values of the variable which have already been initialized.
// 4. let is block scoped.
// 5. Let doesn't supports Hoisting.

// const - 1. we have to declare the variable and initialize in the same line itself.
// 2. Two variables with same name aren't possible with const.
// 3. We can't reassign/update the values of the variable which have already been initialized.
// 4. const is block scoped.
// 5. const also doesn't supports Hoisting.

// var - 1. we can declare the variable name in one line and initialize it on another line
// or in the same line itself.
// 2. Two variables with same name are possible with var
// 3. We can reassign/update the values of the variable which have already been initialized.
// 4. var is global scoped.
// 5. var supports Hoisting.

//---------------------------------------------------------------------------------------------------------

// Q4 What is execution context
// Q5 What is creation phase and execution phase?

// Everything in JS happens inside Execution Context
//  we have 2 components: creation phase and execution phase
// js is synchronous and single threaded language so the code is exexcuted line-by line
// In creation phase : 
// variables are allocated memory with a default value as 'undefined'
// function defination is stored as it is
//In execution phase:
// variables are initailized with the given value
// When a function is called then a function execution context is created
// In function execution context :
// again it has 2 phase : creation phase and execution phase
//in creation phase: variables inside function are allocated memory with a default value undefined
//in execution phase variables are initialized with given value and the function performs its task
// once it is over function EC is deleted and same case with Global EC. 


//---------------------------------------------------------------------------------------------------------

// Q6 What is meant by first class functions
// Function can be assgined to a variable.
//  FCF's are those fun which can be passed as an argument into another fun .
//or can be returned from another fun.
//They are also called as First Class Citizens.

// Higher order function is a function that takes a function 
// as argument or returns a function

//---------------------------------------------------------------------------------------------------------

// Q7 What are closures? Give an example of closure

// A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope 
// from an inner function.

// example

// const ticketBooking = function (){
//     let count0 = 0;
//     let count1 = 0;
//     return function(){
//         count0++;
//         count1++;
//         console.log(`The count is ${count0} ${count1}`);
//     }
// }

// const bookie = ticketBooking();
// console.log(bookie);
// console.dir(bookie);// helps to find out closures
// bookie(); // 1 1
// bookie(); //2 2
// bookie(); // 3 3