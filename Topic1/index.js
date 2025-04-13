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


// Question: Arithmetic operators
let num7 = 12;
let num8 = 22;
console.log(num7 + num8); // addition
console.log(num7 - num8); // subtraction
console.log(num7 * num8); // multiplication
console.log(Math.floor(num7 / num8)); // division -> quotient
console.log(num7 % num8); // modulus -> remainder


// Question: Relational operators
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 7);
console.log(10 !== 10);
console.log(10 === 10);


// Question: Logical operators
console.log(10 > 6 && 5 < 9 && 18 > 9);
console.log(10 < 6 || 15 < 9 || 18 > 9);
console.log(!(10 > 6));


// Question: Unary operators ( ++ -- )
let i = 11;
i = i++ + ++i;
console.log(i);

let num9 = 11, num10 = 22;
let num11 = num9 + num10 + num9++ + num10++ + ++num9 + ++num10;
console.log("num9=" + num9); // 13
console.log("num10=" + num10); // 24
console.log("num11=" + num11); // 103

let num12 = true; // js consider true as 1 and false as 0
num12++;
console.log(num12);

// let num13 = 11++; // you cannot use this way directly on constant
// console.log(num13);


// Question: Math Functions
console.log(Math.round(10.5));
console.log(Math.ceil(10.1));
console.log(Math.floor(10.9));
console.log(Math.trunc(18.98)); // removes the decimal part
console.log(Math.pow(2, 5)); // 2^5
console.log(Math.sqrt(25));
console.log(Math.cbrt(8));
console.log(Math.abs(-15)); // absolute (converts negative value to positive)
console.log(Math.max(78, 65, 12, 43)); // returns max value
console.log(Math.min(12, 2, 34, 1)); // returns min value
console.log(Math.trunc((Math.random() * 9000) + 1000)); // retuns between 0 to 1 if don't pass anything
let num13 = 89.3243243;
console.log(typeof num13.toFixed(2)); // 2 numbers after decimal but toFixed also covert number into string type


// Math problems
// Question: calculate area and perimeter of rectangle
let length = 5;
let breadth = 7;
console.log(length * breadth); // area
console.log(2 * (length + breadth)); // perimeter

// Question: Generate 6 digits OTP
console.log(Math.trunc((Math.random() * 900000) + 100000));

// Question: area of triangle by heron's formula (sqrt of s * (s-a) * (s-b) * (s-c))
let value1 = 5;
let value2 = 2;
let value3 = 3;
let s = (value1 + value2 + value3) / 2;
console.log(Math.sqrt(s * (s - value1) * (s - value2) * (s - value3)));

// Question: Circumference of circle
let radius = 12;
console.log((2 * Math.PI * radius).toFixed(2)); // circumference
