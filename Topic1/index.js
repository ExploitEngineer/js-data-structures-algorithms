// in-case you don't know we can create variables like this also & and this wll only work with var and you can use the var varibles before initializing them  NOTE:  you have to use let & const
a = 12;
console.log(a);
var a;


// Question: sum of two integers
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);


// Question: Relation between integer and string
let str = '12';
let num = 13;
console.log(typeof (str + num)); // this process is called concatination


// Question: sum and message
let num3 = 10;
let num4 = 20;
console.log(`sum of ${num3} and ${num4} is` + " " + num3 + num4);
console.log(`sum of ${num3} and ${num4} is` + " " + (num3 + num4));


// type coercion
console.log(str + num);
console.log(str - num);
console.log(str * num);
console.log(str / num);


// Answer and type the answer | from moving to one type to another is called type conversion
/*
let age = prompt("Enter your age");
age = Number(age);
console.log(typeof(age), age);
*/


// Question: Swap two variables via 3 methods

// Method1: swapping with extra variables
let num5 = 10;
let num6 = 20;
let newnum = num5;
num5 = num6;
num6 = newnum;
console.log(num5, num6);

// Method2: Using simple mathematics
num5 = num5 + num6; // 30
num6 = num5 - num6; // 10
num5 = num5 - num6; // 20

// Method3: Using destrcturing
[num5, num6] = [num6, num5];
console.log(num5, num6);


// Question: Arithmetic operations
let num7 = 12;
let num8 = 22;
console.log(num7 + num8); // addition
console.log(num7 - num8); // subtraction
console.log(num7 * num8); // multiplication
console.log(Math.floor(num7 / num8)); // division -> quotient
console.log(num7 % num8); // modulus -> remainder
