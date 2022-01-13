if (1) {
    console.log('Ok');
}   else {
    console.log('False');
}



// const num = 150;
// if (num < 49) {
//     console.log('Error');
// } else {
//     if (num > 100) {
//         console.log('Много');
//     } else {
//         console.log('Ok');
//     }
// }

// const num = 160;
// (num > 150) ? console.log('ДА') : console.log('НЕТ');

// switch (num) {
//     case 150: 
//         console.log('В точку');
//         break;
//     case 260: 
//         console.log('Это дохуя');
//         break;
//     default: 
//         console.log('Нет соответсвий');
//         break;

// }

// let n = 0;
// while (n <= 10) {
//     console.log(n);
//     n++;
// }

// for (let i = 1; i < 10; i++) {
    
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
    
// }
let num = 10;
function showFirstMessage(text) {
    console.log(text);
     num = 20;
    console.log(num);
}

showFirstMessage(123);
console.log(num);


function calc(a, b) {
    return (a + b);
}
console.log(calc(10,5));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log("Hello");
};

logger();

const calcs = (a, b) => a + b;

// Lesson 17 - Methods 


const str = "sasha";
console.log(str.length);

console.log(str.toUpperCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "sasha super";

console.log(logg.slice(6));

console.log(logg.substring(6, 11));

const num1 = 12.2;

console.log(Math.round(num1));

const test = "12.2px";

console.log(parseInt(test));
console.log(parseFloat(test));
