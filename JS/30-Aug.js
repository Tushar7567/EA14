// Asynchronous JavaScript and XML (AJAX) - Ajax allows us to make server calls and display the data without
// reloading the entire page. 
// It allows us to communicate with the remote web servers in an asynchronous way. With AJAX calls we can 
// request data from web servers dynamically. It helps us to create CRUD Applications.




// $('button').click(function(){
//     $.ajax({
//         url:"https://jsonplaceholder.typicode.com/todos/2",
//         type: "GET",
//         success: function(data){
//             console.log(data);
//             document.getElementsByTagName("p")[1].innerText = data.title;
//             document.getElementsByTagName("p")[1].style.backgroundColor = 'yellow';
//         }
//     })
// })



// Callback hell

// //Callback Hell - Callbacks are just the name/convention for using JavaScript. It instead of immediately 
// returning results like other functions, takes time to produce the result. So, If we stuck in some 
// particular call which prevents us from making further calls ends us into callback Hell.
// //The structure of callback hell looks like pyramid/arrow shape.
// //This makes our code look haphazard and makes it hard to understand.
// //We should always try to avoid using multiple Callbacks to end up falling into callback hell.
// //We use Promises to prevent using Callbacks and thereby avoiding Callback Hell.


// const getEmpId = () => {
//     setTimeout(() => {
//         console.log("Fetching the ID's");
//         let id =  [1,2,3,4,5];
//         console.log(id);

//         setTimeout(() => {
//             let empDetails = {
//                 fname: 'Harsh',
//                 lname: 'Bajaj',
//                 age: 29,
//             };
//             console.log(`name is  ${empDetails.fname} ${empDetails.lname} and age is  ${empDetails.age}`);

//             setTimeout(() => {
//                 (empDetails.gender = 'male'),
//                 console.log(`name is  ${empDetails.fname} ${empDetails.lname} and age is  ${empDetails.age} and gender is ${empDetails.gender}`);
//             }, 2000);
//         },2000);
//     }, 2000);
// }
// getEmpId();


// 31-Augest-2022

// Promises
// //Promises - Promises are used to handle asynchronous operations in JavaScript. They are easy to manage 
// when dealing with multiple asynchronous operations where callbacks can create callback hell leading to 
// unmanageable code. It also allows us to make API calls or fetch data from Web Servers successfully. If not 
// able to do so fetches us with an error message.

// // It have three stages.
// // 1. Pending               2. Resolved(fulfilled)          3. Rejected.


// const getId = new Promise((resolve, reject) => { //Producer // resolve and reject are executor function
//     setTimeout(() => {
//         let id = [1, 2, 3, 4, 5];
//         resolve(id);
//         reject("Error in fetching data");
//     }, 2000);
// });

// getId
//     .then((data) => {  // Consumer
//         console.log('data resolve is', data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => { // Not neccessary to use
//         console.log('End of promises');
//     })


// const getId = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let id = [1, 2, 3, 4, 5];
//         resolve(id);
//         reject('Error in fetching the details'); //either of resolve or reject is executed on the basis of data received.If received then resolve is called otherwise reject is called. Resolve hits the .then() method and the reject hits the .catch method()
//     }, 2000);
// });

// const getEmpDetails = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             (data) => {
//                 let empDetails = {
//                     fName: 'Ravi',
//                     lName: 'Patel',
//                     age: 24,
//                 };
//                 resolve(
//                     `The id of employee is ${data} and the name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}`
//                 );
//             },
//             2000,
//             data
//         );
//     });
// };


// getId
//     .then((id) => {
//         console.log('The id is', id);
//         getEmpDetails(id[2])
//             .then((data) => {
//                 console.log('the data is', data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("End of promise chaining");
//     })



// //more promise chaining

// let promise = new Promise((resolve, reject) => {
//     resolve();
// });

// promise                       // this promise not working as we expected
//     .then(() => {
//         console.log("first");
//     })
//     .then(() => {
//         setTimeout(() => {
//             console.log("second");
//         }, 3000);
//     })
//     .then(() => {
//         console.log("third");
//     });

// promise                            // This is the solution for it
//     .then(() => {
//         console.log("first");
//     })
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("second");
//                 resolve();
//                 // reject();
//             }, 3000);
//         })
//     })
//     .then(() => {
//         console.log("third");
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// 1-September-2022

// Async and await
// //--> Async/Await - They are used to handle promises more efficiently. The word async before a function 
// always means that the function always returns a PROMISE. So, we therefore use async before the function name
//  to return a promise instead of a value. 

// // Await is used to wait for the result that is to be returned from the promise. So, we use await 
// when we are calling a function which returns a promise. Also, we can use them(Async/Await) for making
//  API calls.

// // Await is always used with the keyword async.




// async function tryingPromises(){//continued with line 2.
//     console.log("I am inside the function using async/await");//3.
//     const response = await fetch("https://api.github.com/users");//4.th line initiated but not finished//i will continue from here later, because I am asked to wait but I have other options to execute other lines also.
//     console.log("before the response is fetched");
//     const users = await response.json();
//     console.log("Users resolved");

//     return users;
// }


// Example---1

// console.log("Before calling the function");//1.
// let data = tryingPromises();//2./ new Promise(resolve,reject)
// console.log("After calling the function");//this was the 4th line that got completed
// console.log("data received",data);
// data.then((res)=>{
//     console.log(res);
// })
// // data.catch((err)=>{
// //     console.log(err);
// // })
// console.log("End Of Code");



// Example----2


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



// Example-----2



// const functionOne = () => {
//     return "I am function One";
// }

// const functionTwo = async () => {
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("I am function Two");
//         }, 3000);
//     })
// }

// const functionThree = () => {
//     return "I am function Three";
// }

// const callAllFunctions = async () => {
//     let responseOne = functionOne();
//     console.log(responseOne);

    
//     let responseTwo = await functionTwo();
//     console.log(responseTwo);

//     let responseThree = functionThree();
//     console.log(responseThree);
// }

// callAllFunctions();


// Example--3

// const getId = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let id = [1, 2, 3, 4, 5];
//         resolve(id);
//         reject('Error in fetching the details'); //either of resolve or reject is executed on the basis of data received.If received then resolve is called otherwise reject is called. Resolve hits the .then() method and the reject hits the .catch method()
//     }, 2000);
// });

// const getEmpDetails = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             (data) => {
//                 let empDetails = {
//                     fName: 'Ravi',
//                     lName: 'Patel',
//                     age: 24,
//                 };
//                 resolve(
//                     `The id of employee is ${data} and the name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}`
//                 );
//             },
//             2000,
//             data
//         );
//     });
// };


// const getData = async () => {
//     console.log('Async/await call started');
//     const id = await getId;
//     console.log(id);

//     const empDetails = await getEmpDetails(id[2]);
//     console.log(empDetails);
// }

// getData();


