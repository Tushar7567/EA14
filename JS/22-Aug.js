function Mobile1(brand, cost){
    this.brand = brand;
    this.cost = cost;
}

const phone1 = new Mobile1("Asus", 20000);
const phone2 = new Mobile1("IQ", 28000);

console.log(phone1);
console.log(phone2);


const student = {
    name: "Tushar",
    age: 21,
    showDetails: function(){
        console.log(`Students name is ${this.name}`);
        console.log(`Age is : ${this.age}`);
        return "I am return statement";
    } 
}
console.log(student.showDetails());

const student2 ={
    name: "Ravi",
}

// Inheritanceof properties and methods of an object

student2.__proto__ = student;//This is not legal method

console.log(student2);
console.log(student2.showDetails());

// all object are in  Object constructor
console.log(student.__proto__);// prototype 
console.log(student.__proto__.__proto__);

console.log("-----------------");

console.log(student2.__proto__);
console.log(student2.__proto__.__proto__);


console.log("-----------------");

let arr = [1,2,3,4,5];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

console.log("-----------------");

function hello(){
    console.log("Hi");
}
console.log(hello.__proto__);
console.log(hello.__proto__.__proto__);
console.log(hello.__proto__.__proto__.__proto__);

console.log("-----------------");

// 22-August 2022

//Call, Apply, Bind - they are used for function borrowing.
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

let employee1 = {
    name: "Ravi",
    employeeCode: 1,
    domain: "Technical",
    
} 

let displayInfo = function(gender, age){
    console.log(this.name, this.employeeCode, this.domain, gender, age);
}

let employee2 = {
    name: "Arya",
    employeeCode: 2,
    domain: "Archer",
}

let employee3 = {
    name: "Karna",
    employeeCode: 3,
    domain: "Archer",
}
//.call()methods input format, 1st is always the Object calling the function followed by the arguments.
displayInfo.call(employee1,"Male",27);// arguments are passed as coma seperated
displayInfo.call(employee2,"Male",5000);
displayInfo.call(employee3,"Male",5020);

console.log("--------------------------------");

displayInfo.apply(employee1,["Male",27]);// arguments are passed in the form of array
displayInfo.apply(employee2,["Male",5000]);
displayInfo.apply(employee3,["Male",5020]);

console.log("--------------------------------");

let result1 = displayInfo.bind(employee1);
// console.log(result1);
result1("Male",32);

let result2 = displayInfo.bind(employee2);
// console.log(result2);
result2("Male",5000);

let result3 = displayInfo.bind(employee3);
// console.log(result3);
result3("Male",5007);

displayInfo.bind(employee2)("M",6000);// Shortcut(assigning arguments directly).



// Inheritance 

const PersonProto = { //Prototype that is used to create other objects(through object.create)
    calculateage(){
        console.log(`My name is ${this.fname} ${this.lname} and current age is ${2022 - this.byear}`);
    },
    initialize(fname,lname,byear){
        this.fname = fname;
        this.lname = lname;
        this.byear = byear;
    }
}

const Jarvis = Object.create(PersonProto);
console.log(Jarvis);

console.log("---------------");

Jarvis.fname = "Jarvis";
Jarvis.lname = "Stark AI";
Jarvis.byear = 1984;
console.log(Jarvis);
Jarvis.calculateage();

console.log("---------------");

const harry = Object.create(PersonProto);// Inheritance from an existing Object
console.log(harry);
console.log("---------------");

harry.initialize("Harry","Potter",1200);
console.log(harry);
harry.calculateage();

console.log("---------------");



















