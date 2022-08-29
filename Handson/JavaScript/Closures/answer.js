function counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3
console.log(counter()); //4



let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count); // What is logged?
    }
    console.log(count); // What is logged?
})();

//1
//0



for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?
    }, 1000);
};

// since its var 
//3
//3
//3
// if  its let the ans. (1,1,1)  



function area(len) {
    return (breadth) => {
        console.log(len * breadth);
    }
}

area(25)(4);  // 100



function increase() {
    var i = 0;
    return inp = () => {
        console.log(++i);
    };
}

let v = increase();
v();
v();
v();

//1
//2
//3



var a = 12;
(function () {
  console.log(a);
})();

//12



var a = 10;
var x = (function () {
    var a = 12;
    return function () {
        console.log(a);
    };
})();
x();

//12

var globalVar = 'xyz';

(function outerFunc(outerArg) {
    var outerVar = 'a';

    (function innerFunc(innerArg) {
        var innerVar = 'b';

        console.log(
            "outerArg = " + outerArg + "\n" +
            "innerArg = " + innerArg + "\n" +
            "outerVar = " + outerVar + "\n" +
            "innerVar = " + innerVar + "\n" +
            "globalVar = " + globalVar);

    })(456);
})(123);

//         outerArg =  123
//         innerArg =  456
//         outerVar =  a
//         innerVar =  b
//         globalVar =  xyz 