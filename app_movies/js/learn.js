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

const num = 160;
(num > 150) ? console.log('ДА') : console.log('НЕТ');

switch (num) {
    case 150: 
        console.log('В точку');
        break;
    case 260: 
        console.log('Это дохуя');
        break;
    default: 
        console.log('Нет соответсвий');
        break;

}

let n = 0;
while (n <= 10) {
    console.log(n);
    n++;
}

for (let i = 1; i < 10; i++) {
    
    console.log(i);
    if (i == 5) {
        break;
    }
    
}