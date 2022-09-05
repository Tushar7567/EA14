console.log('Connected');

// 1
// function demo(e, print) {
//     let sen = 'I am an example of Callback fun ' + e;
//     print(sen);

// }

// function say(arg) {
//     console.log(arg);
// }

// demo('Hiiii', say);


// // 2
// function Callback() {
//     let i = 0
//     setTimeout(() => {
//         console.log(++i);//1
//         setTimeout(() => {
//             console.log(++i);//2
//             setTimeout(() => {
//                 console.log(++i);//3
//                 setTimeout(() => {
//                     console.log(++i);//4
//                     setTimeout(() => {
//                         console.log(++i);//5
//                         setTimeout(() => {
//                             console.log(++i);//6
//                             setTimeout(() => {
//                                 console.log(++i);//7
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);

// }
// Callback();


//3

// const solve = new Promise((resolve, reject) => {
//     const dumb = 'Hii I am a Promise';
//     resolve(dumb);
//     reject(dumb);
// });

// solve
//     .then((data) => {
//         console.log(data);
//         Callback();

//     })
//     .catch((data) => {
//         console.log(data);
//     })


//4

// function example(arg) {
//     return new Promise((resolve, reject) => {
//         if (arg == 'yes') resolve('Promise Resolved');
//         else reject('Promise Rejected');
//     })
// }
// example('no')
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((data) => {
//         console.log(data);
//     })

//5
//Create examples to explain callback function
// function callback () {
//     console.log("Watch Out!");
// }
// setTimeout(callback, 1000);

//6
//Create examples to explain callback hell function
//It instead of immediately  returning results like other functions, takes time to produce the result. So, If we stuck in some 
// particular call which prevents us from making further calls ends us into callback Hell.

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


//7
//Create examples to explain promises function

// const normal = new Promise((resolve,reject) => {
//     const act= 'yes';
//     resolve(act);
//     reject('Oops somthing went wrong');
// });

// normal
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('R.I.P Promise');
//     })

//8
//Create examples to explain async await function


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


//9
//Create examples to explain promise.all function

// const functionOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The first promise has resolved');
//       resolve(10);
//     }, 1 * 1000);
// });

// const functionTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The second promise has resolved');
//       resolve(20);
//     }, 2 * 1000);
// });

// const functionThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The third promise has resolved');
//       resolve(30);
//     }, 3 * 1000);
// });

// Promise.all([functionOne, functionTwo, functionThree]).then((results) => {
//     console.log(`Results: ${results}`);
// });


