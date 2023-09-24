// task2
let camelCase = null;
let UPPER_SNAKE_CASE = null;
let CapitalCase = null;


// task3
let name = 'Vlad';
let age = 17;
let country = 'Moldova';

console.log(`Hey! My name is ${name}, I'm ${age} years old and I'm from ${country}`);


// task4
let num = 6;

// to string
console.log(num.toString());
console.log(String(num));
console.log(`${num}`);
// to boolean
console.log(Boolean(num));
console.log(num === 0);


//task5
let str = '5';

//to number
console.log(Number(str));
console.log(6 + +str);
//to boolean
console.log(str > 32);
console.log(Boolean(str));


//task6
let falsy1 = Boolean(0); 
let falsy2 = Boolean(''); 
let falsy3 = Boolean(undefined);
let falsy4 = Boolean(null);
let falsy5 = Boolean(NaN);

if (num > 3 && Number(str) > 3) {
    console.log('Connection Good!')
} else {
    console.log('Refresh')
}

if (Number(str) > num || num < 10) {
    console.log('Next Level')
} else {
    console.log('Try Again')
}

if (falsy1 == false) {
    console.log('False')
} else {
    console.log('Not false')
}

    if (!falsy2) {
        console.log('Not false')
    } else {
        console.log('False')
    }
 

    if (falsy3 == false) {
        console.log('False')
    } else {
        console.log('Not false')
    }

    if (falsy4 == false || falsy5 == true) {
        console.log('False')
    } else {
        console.log('Not false')
    }

if (falsy5 == false && falsy1 == false) {
    console.log('False')
} else {
    console.log('Not false')
}
 