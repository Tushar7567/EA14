//Call, Apply, Bind - they are used for function borrowing.

// These are just different ways of invoking function
//  when calling a function using these 3 methods, we don't have to define in 
// fun that it will take obj as argument.
// here the first argument is an obj


// Call: In this case every argument is passed individually
// Apply: In this case every argument is passed inside a array
// Bind: In this case, it will return a new fun 


// let employee1 = {
//     name: "Ravi",
//     employeeCode: 1,
//     domain: "Technical",
//     displayInfo: function(){
//         console.log(this.name, this.employeeCode, this.domain);
//     }
// } 
// employee1.displayInfo();

// let employee2 = {
//     name: "Arya",
//     employeeCode: 2,
//     domain: "Archer",
// }

// let employee3 = {
//     name: "Karna",
//     employeeCode: 3,
//     domain: "Archer",
// }

// employee1.displayInfo.call(employee2);
// employee1.displayInfo.call(employee3);

// let employee1 = {
//     name: "Ravi",
//     employeeCode: 1,
//     domain: "Technical",
    
// } 

// let displayInfo = function(gender, age){
//     console.log(this.name, this.employeeCode, this.domain, gender, age);
// }

// let employee2 = {
//     name: "Arya",
//     employeeCode: 2,
//     domain: "Archer",
// }

// let employee3 = {
//     name: "Karna",
//     employeeCode: 3,
//     domain: "Archer",
// }
// //.call()methods input format, 1st is always the Object calling the function followed by the arguments.
// displayInfo.call(employee1,"Male",27);// arguments are passed as coma seperated
// displayInfo.call(employee2,"Male",5000);
// displayInfo.call(employee3,"Male",5020);

// console.log("--------------------------------");

// displayInfo.apply(employee1,["Male",27]);// arguments are passed in the form of array
// displayInfo.apply(employee2,["Male",5000]);
// displayInfo.apply(employee3,["Male",5020]);
// console.log("--------------------------------");


// let result1 = displayInfo.bind(employee1);
// // console.log(result1);
// result1("Male",32);

// displayInfo.bind(employee2)("M",6000);// Shortcut(assigning arguments directly).

// ----------------------------------------------------------------------------------------------------------------------------

//Object: It is a non-Primitive datatype and is used to store data in the form of key-value pair

//the order of entry of properties and methods aren't preserved in Objects.
//Objects converts the keys data types into string even if it isn't of string type. 
// Basically all keys are of string type only.


const Obj1 = {
    name: 'prepbytes',
    age: 24,
}
console.log('I am '+ Obj1.name + 'nice to meet you');


// ----------------------------------------------------------------------------------------------------------------------------

// function constructor
//It is a normal fun that is used to create multiple obj at a time.
// While creating fun constructor always keep first letter capital.
// 'new' keyword mandotary to use in fun constructor

function Person(name,age){
    this.name = name;
    this.age = age;
}

const person_1 = new Person('Jarvis',45);
console.log(person_1);

// ----------------------------------------------------------------------------------------------------------------------------

// what is Prototype and Prototype chaining
// Prototype is a structure of any object and it will be present inside the object 
// we created explicitly(manually).

// prototypes are the mechanism by which JS objects inherit features from one another.
// Every object in JavaScript has a built-in property, which is called its prototype. 
// The prototype is itself an object, so the prototype will have its own prototype, 
// making what's called a prototype chain. The chain ends when we reach a prototype
//  that has null for its own prototype.

// obj --> __proto__ ---> Object.prototype ---> __proto__ ---> null

function PersonProto(name, age){
    this.name = name;
    this.age = age;
}
let per1 = new PersonProto('Anuj',32);
console.log(per1);
// per1-->prototype:Object // fun constructor-->prototype:Object-->__proto__(end of prototype chaining)

// ----------------------------------------------------------------------------------------------------------------------------

// Inheritance: If an object borrows properties(such as data and methods()) of another obj.

function Factory(name,location){
    this.name = name;
    this.location = location;
}
function Food(name,location){
    Factory.call(this,name,location);
    this.category = 'Food';
}
const myFood = new Food('Nestle','UK');
console.log(myFood);

// ----------------------------------------------------------------------------------------------------------------------------

//Callback fun: it is fun that is called after certain interval of time or when required

// Why it is used? ---- The callbacks are needed becaouse JS is an event driven language
// that means instead of waiting for a task to be completed it will keep executing other task. 

setTimeout(() => {
    console.log('Inside callback fun');
}, 2000);
console.log('Outside callback fun');


// ----------------------------------------------------------------------------------------------------------------------------

//Settimeout fun used for? 
// It is used to call a function after given time period


// setInterval: it will keep on calling a function after a given time period 




// function Constructor is  a "blueprint" for creating many objects of the same "type".

// ----------------------------------------------------------------------------------------------------------------------------

// Pure Function: a function in which if we pass same input we will get same out every time
// it is called as well-defined function
function calculate(x){
    console.log(x*5);
}
calculate(4);
