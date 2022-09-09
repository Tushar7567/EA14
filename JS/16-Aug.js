const element1 = document.getElementById("description");
console.log(element1);
console.log(element1.innerText);
console.log(element1.innerHTML);
console.log(document.getElementById("description").innerText);

element1.innerText = " Hey I am the new text";
console.log(element1.innerText);

element1.innerHTML = `
                <span>I am the new span tag</span>
`
console.log(element1.innerText);

const element2 = document.getElementsByClassName("text");
console.log(element2[1]);
console.log(element2[1].innerText);

element2[1].innerText = "yeah I did it.";
console.log(element2[1].innerText);



const element3 = document.getElementsByClassName("next");
console.log(element3[0].innerText);


const element4 = document.getElementsByTagName("h1");
console.log(element4);
console.log(element4[0]);
console.log(element4[1]);
console.log(element4[0].innerText);
console.log(element4[1].innerText);
console.log(element4[0].innerHTML);
console.log(element4[1].innerHTML);


element4[0].style.color = "Tomato";
element4[0].style.backgroundColor = "Yellow";

element4[1].style.backgroundColor = "blue";




function changeText(){
    const element5 = document.getElementsByClassName("text");
    console.log(element5[1]);
    element5[1].style.color = "Aqua";
    element5[1].style.backgroundColor = "black";

}

//------------------------------------------------------------
//Homework

function changeDirection(){
    const element6 = document.getElementsByClassName("parent");
    console.log(element6[0]);
    element6[0].style.height = "200px";
    element6[0].style.backgroundColor = "tomato";
    element6[0].style.flexDirection = "column";
}







//------------------------------------------------------------

//17-Aug-2022

const ele1 = document.createElement("div");
ele1.setAttribute("id","newid");
// ele1.setAttribute("class","newclass");
// ele1.setAttribute("for","anything");
ele1.style.backgroundColor = "yellow";
ele1.style.fontStyle = "italic";
console.log(ele1);

// ele1.innerText = "Hy I am new text created in js";

ele1.innerHTML = `<span>I am span tag 1</span>`;


const ele2 = document.querySelector("#description");
console.log(ele2);

const ele3 = document.querySelector(".text");// For querySelector accessing the className
//with className searched for which appears is the first
console.log(ele3);

const ele4 = document.querySelectorAll(".text");
console.log(ele4);

ele2.appendChild(ele1);

ele2.removeChild(ele1);



const ele5 = document.createElement("img");
ele5.setAttribute("src","../pp/R.jpg");
ele5.style.width = "300px";
element2[1].appendChild(ele5);

// function changeText(){
//     ele5.setAttribute("src","../pp/specs.jpg");
// }




// 19-August-2022
// date and time function
function showRealTime(){
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const sec = date.getSeconds();
    console.log(hours , mins, sec );

    // setTimeout(() => { //callback function , here  after 1000msec(timeout) function is called again 
    //     showRealTime();
    // }, 1000);
}

showRealTime();

// 0-12(where 12 is exclusive) then AM
// 12  it is PM 
// > 12, hours = hours - 12(for showing hours in 1-12 PM)



// First Class Functions(FCF's) - FCF's are those fun which can be passed
// as an argument into another fun .
//or can be returned from another fun.
//They are also called as First Class Citizens. 

const functionA = function(a){
    console.log(a);
}

function abc(){
    console.log("I am abc fun");
}
functionA(abc);//abc is FCF and functionA is higher order fun(fun that take fun as arguments)


functionA (function ab(){
    console.log("i am ab fun");
})


// const functionB = function(){
//     return function(){
//         console.log("I returned a fun");
//     };
// }
let returnedValue = function(){ //function expression returns a function
    console.log("I returned a fun");
}
returnedValue();


// Higher Order Functions  - These are those fun which  takes fun as arguments or return a fun as value


//Callback fun- These are those kind of fun, which can be called back after certain period of time
//or and when required

const sayHi = (friendName) => {
    console.log(`Hello ${friendName}! I hope you are doing good`);
}

const greeting = (nameOfFriend, callbackFunction) => {
    console.log(`I am calling back a function name ${callbackFunction}. Watch Out!`);
    callbackFunction(nameOfFriend);//sayHi("Anand");
}
greeting("Anand",sayHi);





