
//Arrays
//What are array?

//Array is a data structure which helps us store varieties of values(diff data types)-
//although not necessary diff. 

const arrayOfNumnbers = [2,3,4,3,3,45];
const arrayOfNames = ["Adarsh","Vikrant","Aadhar"];
const detailsOfStudent = ["Sambit","Bhadrasahi",234.45,"Bus",true,"Friend"];

//Methods to create an Array - 3 methods

// 1st Method
const list  = ["Adarsh","Vikrant","Aadhar"];


// 2nd Method
const List2 = [];
List2[0] = "zero";
List2[1] = "one";
List2[2] = "two";
List2[3] = "three";
List2[7] = "seven";
console.log(List2);

const example = [];
example[0] = "ok";
example[1] = "koooo";
example[2] = "done";
example[3] = "yes";
example[4] = "Yes sir";
console.log(example);


// 3rd Method using Array constructor
// Constructor always starts with capital letter
const listOfPlaces = new Array("Bombay", "Banglore","Gurugram");
console.log(listOfPlaces);
console.log(listOfPlaces.length);


// push method :- adds a new value in array

const arrayOfNum = [1,2,3,4,3,4,5,6,7,8,9,0];
console.log(arrayOfNum);

arrayOfNum.push(11);
console.log(arrayOfNum);


// pop method :- it always removes last value from array

arrayOfNum.pop();
console.log(arrayOfNum);

arrayOfNum.pop();
console.log(arrayOfNum);



// shift method :- it helps to remove value from strating position
arrayOfNum.shift();
console.log(arrayOfNum);


// unshift method :- it helps to adds value from strating position
arrayOfNum.unshift(50);
console.log(arrayOfNum);


console.log(typeof(arrayOfNum));// In JavaScript, everything is an Object


console.log(arrayOfNum[arrayOfNum.length -1]);



const fruits = ["Apple","Orange","Mango","Guava","Orange","strawberry","Orange"];
console.log(fruits.indexOf("Mango"));

console.log(fruits.includes('Orange')); 
console.log(fruits.includes('Orange')); 

console.log(fruits.lastIndexOf("Orange"));


// slice method :- helps to get certain chunks of data from a data

// console.log(fruits.slice(1,6));// Last index value is exclusive;


// splice method :-
// it takes 3 values let us represent (a,b,c)
// a :- starting index position
// b :- no. of values  to be deleted
// c :- add all value before the array starting position(a)

console.log(fruits);


console.log(fruits.splice(2,3,"kgf","rrr","pushpa"));
console.log(fruits);


console.log(fruits.sort());// sort according to asscending or alphabetical order
// for numbers sort will not give u the numbers in acsending order

console.log(fruits.reverse());// reverse of original position

// reverse according to ascending order
console.log(fruits);

console.log(fruits.sort().reverse());




// For of and for in loop

for( const values of fruits){// allows us to access all the values of the array
    console.log(values);
}


for (const index in fruits){// allows us to access the indexes of the string
    console.log(index);
}



// Practice

const Number = [2,4,3,2,6,7,5,2,7,2,7,2,2,8,9];

console.log(Number);

const Number2 = [];
for(let a = 0; a < (Number.length); a++){
    // if(Number.includes())
    for( let b = a+1; b < Number.length; b++){
        if(Number[a] === Number[b]){
            Number2.push(Number[b]);
            break;
        }
    }     
}
console.log(Number2);





// map, filter, reduce, some, every
// map, filter, reduce are one liner functions, built for specific task.

const listOfNumber = [2,3,4,5,6,7,8];

const mappedNumber = listOfNumber.map(item => item+2);
console.log(listOfNumber);
console.log(mappedNumber);



const filterNumber = listOfNumber.filter(items => items > 5);
console.log(filterNumber);


// acc:- accumulater, curr:-current
const reduceNumber = listOfNumber.reduce((acc,curr) => acc=acc+curr,0);
console.log(reduceNumber);


// some ,every
let resultOne = fruits.some(checkFruits);// any one value is orange then true
// here checkFruits is a callback function
function checkFruits(fruit){
    return fruit === "Orange";
}
console.log(resultOne);

let resultTwo = fruits.every(checkFruits);// all value should be orange then only true

function checkFruits(fruit){
    return fruit === "Orange";
}
console.log(resultTwo);
