

const partyText = document.getElementsByClassName("part1");
console.log(partyText[0].innerText);
partyText[0].addEventListener("mouseover", function changeText() {
    partyText[0].innerText = "Party Time!";
    partyText[0].style.font = "600 24px Manrope";
    partyText[0].style.color = "#FFFFFF";
    partyText[0].style.textAlign = "center";
    partyText[0].style.paddingTop = "7px";
})
partyText[0].addEventListener("mouseout", function changeText2() {
    partyText[0].innerText = "Set Alarm";
})


// Digital clock
let hour = document.querySelector("#Hours");
let Mins = document.querySelector("#Min");
let Secs = document.querySelector("#Sec");
let ampm = document.querySelector("#AmPm");
console.log(ampm.innerText);

function settime() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    // console.log(hrs+":"+mins+":"+sec);
    if (hrs > 12) {
        if((hrs - 12) < 10){hour.innerText = `0${hrs - 12}`;}
        else{hour.innerText = hrs;}
    } else { hour.innerText = `0${hrs - 12}`; }

    if (mins < 10) {
        Mins.innerText = `0${mins}`;
    }
    else { Mins.innerText = mins; }

    if (sec < 10) {
        Secs.innerText = `0${sec}`;
    }
    else { Secs.innerText = sec; }

    if (hrs >= 12 && hrs <= 23) {
        ampm.innerText = "PM";
    } else {
        ampm.innerText = "AM";
    }
    setTimeout(function () {
        settime();
    }, 1000);
}
settime();


// Changing message & image according to time

const gm1 = "GRAB SOME HEALTHY BREAKFAST!!!";
const gm2 = "GOOD MORNING!! WAKE UP !!";

const ga1 = "LET'S HAVE SOME LUNCH !!";
const ga2 = "GOOD AFTERNOON !! TAKE SOME SLEEP";

const ge1 = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
const ge2 = "GOOD EVENING !!";

const gn1 = "CLOSE YOUR EYES AND GO TO SLEEP";
const gn2 = "GOOD NIGHT !!";

let hrs = hour.innerText;
let ap = ampm.innerText;
if (ap == "AM" && (hrs >= 8 && hrs <= 11)) {
    let change = document.getElementsByClassName("text3");
    change[0].innerText = gm1;
    let pic1 = document.querySelector(".seven");
    pic1.style.background = "transparent url('../Images/Component\ 30\ –\ 1.svg')";
    change2.innerText = gm2;
    console.log("8");
}
else if (ap == "PM" && (hrs >= 12 && hrs <= 3)) {
    let change = document.getElementsByClassName("text3");
    change[0].innerText = ga1;
    let pic1 = document.querySelector(".seven");
    pic1.style.background = "transparent url('../Images/Component\ 31\ –\ 1.svg')";
    let change2 = document.querySelector(".text0");
    change2.innerText = ga2;
    console.log("12");
}
else if (ap == "PM" && (hrs >= 4 && hrs <= 7)) {
    let change = document.getElementsByClassName("text3");
    change[0].innerText = ge1;
    let pic1 = document.querySelector(".seven");
    pic1.style.background = "transparent url('../Images/lunch_image/lunch_image.png')";
    let change2 = document.querySelector(".text0");
    change2.innerText = ge2;
    console.log("4");
}
else{
    let change = document.getElementsByClassName("text3");
    change[0].innerText = gn1;   
    let pic1 = document.querySelector(".seven");
    pic1.style.background = "transparent url('../Images/Component\ 32\ –\ 1.svg')";
    let change2 = document.querySelector(".text0");
    change2.innerText = gn2;
    console.log("8-pm");
}

// ((ampm === "PM" && hour >= 8) || (ampm === "AM" && hour <= 7))
function setAlarm() {
    let selectTime1 = document.querySelector("#time1");
    let selectTime2 = document.querySelector("#time2");
    let selectTime3 = document.querySelector("#time3");
    let selectTime4 = document.querySelector("#time4");
   
    let output1 = selectTime1.options[selectTime1.selectedIndex].value;
    document.querySelector(".output1").textContent = output1;
    
    let output2 = selectTime2.options[selectTime2.selectedIndex].value;
    document.querySelector(".output2").textContent = output2;
   
    let output3 = selectTime3.options[selectTime3.selectedIndex].value;
    document.querySelector(".output3").textContent = output3;
    
    let output4 = selectTime4.options[selectTime4.selectedIndex].value;
    document.querySelector(".output4").textContent = output4;


   


}














