// Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button			

const h1 = document.querySelector('h1');
const btn = document.querySelector('#btn');

btn.addEventListener('click',() => {
    h1.innerText = 'MERN stack';
})



// Write code to get 1st H1 element from a webpage using DOM			

console.log(h1);


// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second			

function settime() {
    let date = new Date;
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    const hour = document.querySelector('#hr');
    const mins = document.querySelector('#min');
    const secs = document.querySelector('#sec');

    hour.innerText = hr;
    mins.innerText = min;  
    secs.innerText = sec;
    setTimeout(() => {
        settime();
    },1000);
     
}
// settime();


// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"			

const text = document.getElementsByTagName('h2');
const button = document.querySelector('#bon');

button.addEventListener('click',() => {
    text[1].innerText = 'Welcome to Elevation academy';
})


// Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text			
$('#b').click(function(){
    $('.hide').toggle();

});

// Given an array of 0's and 1's find out number of 0's			

const arr1 = [0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0]
let count = 0;
for(let i=0; i<arr1.length; i++){
    if(arr1[i] === 0){count++;}
}
console.log(arr1);
console.log(count);

let array2 = [1,0,1,0,1,0];
let count2=0;
for(let i of array2){
    if(i == 0){
        count2++
    }
}

console.log(count2);


// Given an array find out total no. of odd and even nos.			

const arrayx = [23,345,5657,231,5,2,6,672,92,23];
let count3 = 0;
for(let a of arrayx){
    if(a%2 == 0){count3++;}
}
console.log('Even no. ' + count3);
console.log('Odd no. ' + ((arrayx.length)-count3));


// Given a string find out number of vowels 			

let vowels = ["a","e","i","o","u"];

let str = "hi folks";

var S=0
for(let s of str){
    if(vowels.includes(s)){
          S=S+1;
    }
}
console.log(S);

// Write a code to create two objects with 2 properties each,
//  one will be string and other will be an array. 
//  Create a function to check if all the elements of the arrays in both the objects are same			


const obj1 = {
    a: "this is a string",
    b: ['this', 'is', 'an', 'array']
}

const obj2 = {
    a: "this is a string",
    b: ['this', 'is', 'an', 'array2']
}

function sameArray(par1, par2) {
    let arr1 = par1.b;
    let arr2 = par2.b;

    if(arr1.length != arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(sameArray(obj1, obj2)); 


// function doSomething() {
//     console.log(this);
//     }
//  doSomething();


