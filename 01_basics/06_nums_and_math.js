// const value = "100";
// const x = 104;

// const balance = new Number(500);
// console.log(balance);

// console.log(value);
// console.log(typeof 500);          // number
// console.log(typeof balance);      // object
// console.log("String to Number :"+Number(value));

// console.log("length :" + x.toString().length);

// const otherNumber = 142.0343;

// console.log(otherNumber.toFixed());
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(3));

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString());

// ==============MATHS=================

// console.log(Math);
// console.log(Math.abs(-20)); // use to Convert -ve to +ve
// console.log(Math.abs(20)); // not Convert +ve to -ve

// console.log(Math.round(5.7));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(5.9));
// console.log(Math.sqrt(49));
// console.log(Math.pow(2, 5));  // pow(base, exponent)
console.log("min :"+Math.min(42,43,22,5,-2,2,53));
console.log("max :"+Math.max(42,43,22,5,2,53));


console.log(Math.random);
console.log(Math.random());  // value always between 0 and 1

// 1. Random number 0 se 9 tak

let num = Math.floor(Math.random() * 10);
console.log(num);

// Random number 1 se 10 tak

let num1 = Math.floor(Math.random() * 10) + 1;
console.log(num1);


// Random number 1 se 100 tak

let num2 = Math.floor(Math.random() * 100) + 1;
console.log(num2);


// FORMULA : Math.floor(Math.random() * (max - min + 1)) + min 
let num7 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(num7);














