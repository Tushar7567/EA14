let studentRecords = [{ name: 'John', id: 123, marks: 98 },
{ name: 'Baba', id: 101, marks: 23 },
{ name: 'yaga', id: 200, marks: 45 },
{ name: 'Wick', id: 115, marks: 75 }]
// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

console.log(studentRecords[0]);

let result = new Array;
for( let val of studentRecords){
    result.push(val.name.toUpperCase());
}
console.log(result);
// ['JOHN', 'BABA', 'YAGA', 'WICK']

// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

let result2 = new Array;
for( let val of studentRecords){
    if(val.marks > 50){
        result2.push(val);
    }
}
console.log(result2);
// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"


// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.


let result3 = new Array;
for( let val of studentRecords){
    if(val.marks > 50 && val.id > 120){
        result3.push(val);
    }
}
console.log(result3);

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let result4 = new Array;
let sum = 0;
for(let val of studentRecords){
   sum += val.marks; 
}
console.log(`Sum Total marks of students are: ${sum}`);


// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let result5 = new Array;
for( let val of studentRecords){
    if(val.marks > 50){
        result5.push(val);
    }
}
console.log(result5);


//  Question 6: This time we are required to print the sum of marks of the students with id > 120.

let result6 = new Array;
for( let val of studentRecords){
    if(val.marks > 50 && val.id > 120){
        result6.push(val);
    }
}
console.log(result6);


// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let result7 = new Array;
let sum2 = 0;
for(let val of studentRecords){
   if(val.marks > 50){
    sum2 += val.marks; 
   }else{
    sum2 += (val.marks + 15); 
   }  
}
console.log(`Sum Total marks of students are: ${sum2}`);


// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

function Student(name, sClass, rollno){
    this.name = name;
    this.sClass = sClass;
    this.rollno = rollno;
}

const obj1 = new Student("Solo Leveling","A",24);
const obj2 = new Student("The Begining of the End","C",64);
const obj3 = new Student("Poison Dragon","B",6);
const obj4 = new Student("Overgeared","E",17);

let arr = new Array;
arr.push(obj1);
arr.push(obj2);
arr.push(obj3);
arr.push(obj4);
console.log(arr);





