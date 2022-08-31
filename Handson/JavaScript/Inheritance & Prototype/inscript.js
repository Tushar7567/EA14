// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const parent  = {
    fname: 'Cool',
    fage: 104,
    parentFun: function(){
        console.log('I am parent objects');
    }
}

const child = {
    name: "Ravi",
    age: 29,
    childFun: function(){
        console.log('I am child object');
    }
}

child.__proto__ = parent;
child.parentFun();

// Write code to explain prototype chaining

console.log(child.__proto__); // 
//{parentFun: ƒ}parentFun: ƒ ()[[Prototype]]: Object

console.log(child.__proto__.__proto__); // function constructor



// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
 const example = {
    sum: function(arr){
        let arrsum = 0;
        for(let value of arr){
            arrsum += value;
        }
        console.log(arrsum);
    }
 }

 const  arr1 = [23,45,2,7,9,3,09,122,55];
 const  arr2 = [73,56,12,87,34,98,43,87];

 Array.__proto__ = example;
 Array.sum(arr1);
 Array.sum(arr2);


// Write a JavaScript function to retrieve all the names of object's own and inherited properties


function print(){
   
    const objectKeys = Object.keys(child);
    const objectKeys2 = Object.keys(child.__proto__);

    console.log(objectKeys,objectKeys2);
    
}
print();




























































