// String :- anything inside starting with single cots and ending with single cots 
// or same with double cots 


const myString = "Hello Everyone! I hope you all are enjoying learnig JavaScript ing I hope you are good"
console.log(myString);

// charAt , concat, startsWith, endsWith

console.log(myString.charAt(6));


const myShot = "ok done sir";
console.log(myString.concat(myShot));


console.log(myString.startsWith("H"));// checks starting of sting matches or not(Output is boolean)
console.log(myString.startsWith("Helo"));


console.log(myString.endsWith("t"));


// includes, indexOf, lastIndexof, length

console.log(myString.includes("ing"));


console.log(myString.indexOf("ing"));// first occurence of string


console.log(myString.lastIndexOf("ing"));// last occurence of string


console.log(myString.length);


// replace, replaceAll, search, reverse, sort

console.log(myString.replace("I","Me"));
console.log(myString.replaceAll("I","Me"));


console.log(myString.search("Me"));// If present then index value is returned or else -1
// console.log(myString.reverse());// Does't work with String

// console.log(myString.sort());// Does't work with String



console.log(myString.repeat(2));
// const myString = "Hello Everyone! I hope you all are enjoying learnig JavaScript ing I hope you are good"

console.log(myString.substr(2,9));// 2--starting index value
//9-- no. of characters from starting index



// If substring has first index value greater than the second index value then they are reverse in position
console.log(myString.substring(2,9));//2--starting index,  9-- exclusive ending index

console.log(myString.substring(9,2));//2--starting index,  9-- exclusive ending index


console.log(myString.slice(2,9));






