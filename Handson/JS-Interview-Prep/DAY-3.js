// What are promises and why do we need them?
// What is promise chaining

 //Promises - Promises are used to handle asynchronous operations in JavaScript. They are easy to manage 
// when dealing with multiple asynchronous operations where callbacks can create callback hell leading to 
// unmanageable code. It also allows us to make API calls or fetch data from Web Servers successfully. If not 
// able to do so fetches us with an error message.

// // It have three stages.
// // 1. Pending               2. Resolved(fulfilled)          3. Rejected.






// Q2. What is the purpose of async/await keywords?
// the code will be more readable
// easy to debug
// Q2. Give an example of async/await


// Async and await
// //--> Async/Await - They are used to handle promises more efficiently. The word async before a function 
// always means that the function always returns a PROMISE. So, we therefore use async before the function name
//  to return a promise instead of a value. 

// // Await is used to wait for the result that is to be returned from the promise. So, we use await 
// when we are calling a function which returns a promise. Also, we can use them(Async/Await) for making
//  API calls.

// // Await is always used with the keyword async.

// const functionOne = () => {
//     return "I am function One";
// }

// const functionTwo = () => {
//     // return new Promise((res,rej)=>{
//         setTimeout(() => {
//             return("I am function Two");
//         }, 3000);
//     // })
// }

// const functionThree = () => {
//     return "I am function Three";
// }

// const callAllFunctions = () => {
//     let responseOne = functionOne();
//     console.log(responseOne);

    
//     let responseTwo = functionTwo();
//     console.log(responseTwo);

//     let responseThree = functionThree();
//     console.log(responseThree);
// }

// callAllFunctions();








// What is hoisting?

// it the behavior of js to move the declaration of variable sand function to the top of their scope. 

// only let, const and regular function support hoisting







// What is the DOM?
// Document Object Model

// A Document object represents the HTML document that is displayed in that window. 
// The Document object has various properties that refer to other objects which allow access to and modification of document content.








// Difference between undefined vs not defined vs NaN

// NaN: Not a number: As the name implies, it is used to denote that the value of an object is not a number. There are many ways that you can generate this error, one being invalid math opertaions such as 0/0 or sqrt(-1)

// undefined: It means that the object doesn't have any value, therefore undefined. This occurs when you create a variable and don't assign a value to it.

// null: It means that the object is empty and isn't pointing to any memory address.







// How many operators do we have in JS ?

// Arithmetic Operators
// Comparison Operators
// Bitwise Operators
// Logical Operators
// Ternary Operators
// assignment operator






// What is callback hell

// each and every callback takes an argument that is a result of the previous callbacks. 
// In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. 
// Also, if there is an error in one function, then all other functions get affected.
// it will be creating pyramid like structure












// What are arrow functions?

// arrow functions are functions which have short syntax.
// no function keyword is used
// these function are not hoisted
// they do not have there own this keyword




