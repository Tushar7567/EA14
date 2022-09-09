//Objects are a collection of properties and methods

//How do we create an Object.
// Two methods.
//the order of entry of properties and methods aren't preserved in Objects.
//Objects converts the keys data types into string even if it isn't of string type. 
// Basically all keys are of string type only.

console.log(31,"31");
const student = {
    fname: "Tushar",
    lname:  "Swain",
    profession: "Web developer",
    21: "Age",
    displayInfo: function(){
        console.log(`The first name of the student is ${student.fname} 
        and the last name is ${student.lname} and its profession is ${student.profession}
        and its age is ${student[21]}`);
    }
}
console.log(student);
console.log("--------------------------");

//Method to access the property of an Object
// console.log(mobile.brand);//objectName.propertyName
// console.log(mobile["brand"]);//objectName["propertyName"]

console.log(student.profession);
console.log(student["lname"]);

console.log("--------------------------");

student.height = "6Ft";//Method to add property after object has been created
console.log(student);

console.log("--------------------------");

delete student[21];
console.log(student);

console.log("--------------------------");

console.log(student.hasOwnProperty("lname"));// allows us check if the property that exist in object

console.log("--------------------------");

const objectKeys = Object.keys(student);// gives array of keys
console.log(objectKeys);

for(const keys of Object.keys(student)){// this will give individual keys
    console.log(keys);
}
console.log("--------------------------");

const objectValues = Object.values(student);// gives array of values
console.log(objectValues);

for(const value of Object.values(student)){// this will give individual values
    console.log(value);
}

console.log("--------------------------");
// Both together

for(const [keys,value] of Object.entries(student)){
    console.log(keys,value);
}

console.log("--------------------------");

// Method-2 Object creation
// Creating object using function constructor
// Constructor always starts with Capital letter
function Student(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

const ravi = new Student("Ravi", "Kumar",25);
const arjun = new Student("Arjun", "Pandu",22);
const Shri_Krishna = new Student(" Shri Krishna", " ",20);

console.log(ravi);
console.log(arjun);
console.log(Shri_Krishna);

console.log("--------------------------");

// this keyword 

// In an object this refers to the name of the Object.
//Alone(global space) this refers to the Global Object (Window Object)
//in a regular function, this also points to the GLobal Object (Window)
// Strict Mode -( use strict ), this refers to undefined

console.log(this);// WINDOW/GLOBAL OBJECT(ALL PROPERTIES, FUNCTION, ARE INSIDE WINDOW OBJECT)


// spread operator(...)

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];

const arr4 = arr1.concat(arr2);
console.log(arr4);
console.log("--------------------------");

const array = [...arr1,...arr2,...arr3];
console.log(array);















