const myString = "      Hi I am trim method in Sting     ";
console.log(myString.trim());//removes the extra space from the starting and ending of the string

const names = "Tata-Bajaj-Mahindra";
const names2 = "Tata@Bajaj@Mahindra@BMW";

//it will return an array
console.log(names.split("-"));
console.log(names2.split("@")[2]);// Output---Mahindra




// Maps - 

// Maps are collection of key, value pairs.
//It preserves the order of insertion of properties.
//It also preserves(hold) the data type of properties/keys, i.e. can have properties of any data type.

//How do we create a Map? 
//two methods

// 1. Inserting arrays as key value pairs to Map

const mapone = new Map([
    ['fname' , "Tushar"],// left side is key and right is value
    ['lname' , "Swain"],
    [21 , 'age'],
    [true , 'GoodToGo'],
])

console.log(mapone);

const myMapTwo = new Map();
myMapTwo.set('fname',"Tushar");
myMapTwo.set('lname' , "Swain");
myMapTwo.set(210 , 'Pool');
myMapTwo.set(true , 'GoodToGo');

console.log(myMapTwo);

console.log(myMapTwo.get('lname'));

console.log(myMapTwo.has('re'));// tells if map has that key or not


//myMapTwo.clear();//clears all the entries of key value pairs
console.log(myMapTwo);

// myMapTwo.delete('lname');// deletes the mentioned key
console.log(myMapTwo);

console.log(myMapTwo.size);

//--------------------------------------------------------------------------------------
// ------- 11-August-2022---------------

console.log("----------------------------------");

//key()--allows us to get all keys from map
for(const a of myMapTwo.keys()){
    console.log(a);
}
console.log("----------------------------------");

for(const a of myMapTwo.values()){
    console.log(a);
}

console.log("----------------------------------");

for(const [a,b] of myMapTwo.entries()){// First keys and then values
    console.log(a,b);
}

console.log("----------------------------------");

myMapTwo.forEach(function(value,key){//If two params then first is always value and then key
    console.log(key,value);
    console.log(value,key);

})

console.log("----------------------------------");

//Sets

// Sets are collection of UNIQUE values.(doesnot contain keys)
// All the values can occur only once. They don't allow duplicate values
// It can hold values of any data type.

// methods to create a Set

// two method
const setone = new Set(["apples","oranges","oranges","kiwi","mango"]);
console.log(setone);
console.log("----------------------------------");

// add()--- allows to add values in set
const settwo = new Set();
settwo.add("Redmi");
settwo.add("Oppo");
settwo.add("Oppo");
settwo.add("Oppo");
settwo.add("Vivo");
settwo.add("Lenovo");
console.log(settwo);
console.log("----------------------------------");


// settwo.delete("lenovo");
// console.log(settwo);
// console.log("----------------------------------");

// settwo.clear();
// console.log(settwo);
// console.log("----------------------------------");


settwo.has("Asus");
console.log(settwo);
console.log("----------------------------------");


for(const a of settwo.keys()){// print values 
    console.log(a);
}
console.log("----------------------------------");

// USE VALUES() METHOD OTHERS ARE UNNECCESSARY
for(const a of settwo.values()){//print values
    console.log(a);
}

console.log("----------------------------------");

for(const [a,b] of settwo.entries()){// values, values
    console.log(a,b);
}

console.log("----------------------------------");



