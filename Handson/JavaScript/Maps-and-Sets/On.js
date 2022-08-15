// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

//Answer
const S = "abcadeecfb";

const setone = new Set(S);
console.log(setone.values());


// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

const str = "abcadeecfb";
const mapone = new Map();
let count = 0;
for(let i = 0; i < str.length; i++){
   for(let j = 0; j < str.length; j++){
        let a = str[i];
        if(a === str[j]){
            count++;
        }
   }
   if(count){
    mapone.set(str[i],count);
    count = 0;
   }
}
console.log(mapone);








