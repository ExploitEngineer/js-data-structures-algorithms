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

