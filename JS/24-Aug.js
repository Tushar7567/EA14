console.log("Your Here");

// Classes
// Classes in JS doesn't work exactly similar to that of classes in Java/C++.
// They are just syntactic sugar  to Object Prototype, instancs that we have learnt.
// Classes are special kind of Function

// Syntax---
// 1. Classes are not hoisted
// 2. Classes are called as First Class Citizens
// 3. Classes are used in strict mode 


class personClass1 {
    constructor() {

    }
    calculateAge() {

    }
}

// const PersonProto = {
//     calculateage(){
//         console.log(`My name is ${this.fname} ${this.lname} and current age is ${2022 - this.byear}`);
//     },
//     initialize(fname,lname,byear){
//         this.fname = fname;
//         this.lname = lname;
//         this.byear = byear;
//     }
// }


const PersonClass = class {
    constructor(fname, lname, byear) {
        this.fname = fname;
        this.lname = lname;
        this.byear = byear;
    }
    calculateage() {
        console.log(`My name is ${this.fname} ${this.lname} and current age is ${2022 - this.byear}`);
    }
    // After line-54
    // PersonClass.prototype.greet = function(){
    //     console.log(`Hi ${this.fname}! How are you?`);
    // }
}

const steve = new  PersonClass("Captain","America",1880);
console.log(steve);// Arguments will be caught by constructor()
steve.calculateage();

PersonClass.prototype.greet = function(){
    console.log(`Hi ${this.fname}! How are you?`);
}

steve.greet();

//------------------------------------------------------

// Inheritance in Object

const PersonProto = {
	calculateAge() {
		//here in this.propertyName, this is pointing to the object that is calling this method....
		console.log(`My name is ${this.fName} ${this.lName} and current age is ${2022 - this.bYear}`);
	},
	initialise(fName, lName, bYear) {
		this.fName = fName;
		this.lName = lName;
		this.bYear = bYear;
	},
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.initialise("Steven","Richard",1980);
steven.calculateAge();

const StudentProto = Object.create(PersonProto);

StudentProto.initial = function (fName, lName, bYear, course) {
    PersonProto.initialise.call(StudentProto,fName,lName,bYear);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`Student's name is ${this.fName} ${this.lName} and is pursuing course as ${this.course}`);
}

const sejhal = Object.create(StudentProto);
console.log(sejhal);
sejhal.initial("Sejhal","Kaushal",1994,"CSE");
sejhal.introduce();
sejhal.calculateAge();









