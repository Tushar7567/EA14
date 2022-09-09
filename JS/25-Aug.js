////Closures - Its not something that we create manually or explicitly. It happens automatically in certain 
// situations which we need to analyze/realize ourselves.
//// Closure makes a function remember all the variables that existed in the function birth place initially.
////Any function always have access to the "variable environment" of the execution context in which the function was 
// created.




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
// bookie();
// bookie();
// bookie();


// let f;
// const g = function() {
//     const a = 23;
//     f = function(){
//         console.log(a*2);
//     }
// }



// const h = function(){
//     const b = 25;
//     f = function(){
//         console.log(b*2);
//     }
// }

// g();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);
// f();


// setTimeout  vs  setInterval
//setTimeout ---> it run only once after given time
//setInterval --> it keeps up executing after given time

// setTimeout((para1,para2) => {
//     console.log(`Hey hi`, para1, para2);
// }, 3000, "apple","oranges");
// setInterval((drink1, drink2) => {
//     console.log(`The drink you ordered are ${drink1} ${drink2}`);
// },3000, "Blue Lagoon","Mojito")


// const boardPassengers = (n, wait) => {
//     const peoplePerGroup = n/3;//60

//     setTimeout(()=>{
//         console.log(`We are boarding all ${n} passengers`);
//         console.log(`There are 3 groups with ${peoplePerGroup} passengers in each group`);
//     },wait*1000);//3secs
//     console.log(`Starting onboarding of the passengers in ${wait} hrs`);
   
// }
// boardPassengers(180,3);

//--------------------------------------------------------------------------------------------------------------


// 26-Aug-2022

// //Jquery - It is a JavaScript Library, which provides us an effective method for doing some changes in our 
// frontend and gives us essential features like DOM manipulation and AJAX interactions.




// $('button').click(function (){
//     // $('p').toggle();
//     $('.ex1').toggle();
// // .hide();
//     // $(this).toggle();
// });

// Ajax - 

