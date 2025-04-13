// Question: Valid user for voting
let userAge = Number(prompt("What is your age?"));

if (isNaN(userAge)) {
    throw new Error('Invalid prompt');
} else if (userAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


// Question: Shop Discount
let finalAmount = Number(prompt("What is the final amount?"));
let discount = 0;
if (finalAmount > 0 && finalAmount <= 5000) {
    discount = 0;
} else if (finalAmount > 5000 && finalAmount <= 7000) {
    discount = 5;
} else if (finalAmount > 7000 && finalAmount <= 9000) {
    discount = 10;
} else if (finalAmount > 9000) {
    discount = 20;
} else {
    throw new Error('Wrong Input');
}
console.log(finalAmount - Math.floor((discount * finalAmount) / 100));


// Question: Utility Rent
let electricityUnit = Number(prompt("Enter electricity unit"));
let utilityAmount = 0;
if (electricityUnit < 400) {
    utilityAmount = (electricityUnit - 400) * 13;
    electricityUnit = 400;
}
if (electricityUnit > 200 && electricityUnit <= 400) {
    utilityAmount += (electricityUnit - 200) * 8;
    electricityUnit = 200;
}
if (electricityUnit > 100 && electricityUnit <= 200) {
    utilityAmount += (electricityUnit - 100) * 6;
    electricityUnit = 100;
}
utilityAmount += electricityUnit * 4;
console.log(utilityAmount);


// Question: Rupees Denominations
let pocketAmount = Number(prompt("Enter the amount you have in your pocket!"));
if (pocketAmount >= 5000) {
    console.log("5000 notes : " + Math.floor(pocketAmount / 5000));
    pocketAmount = pocketAmount % 5000;
}
if (pocketAmount >= 1000) {
    console.log("1000 notes : " + Math.floor(pocketAmount / 1000));
    pocketAmount = pocketAmount % 1000;
}
if (pocketAmount >= 500) {
    console.log("500 notes : " + Math.floor(pocketAmount / 500));
    pocketAmount = pocketAmount % 500;
}
if (pocketAmount >= 100) {
    console.log("100 notes : " + Math.floor(pocketAmount / 100));
    pocketAmount = pocketAmount % 100;
}
if (pocketAmount >= 50) {
    console.log("50 notes : " + Math.floor(pocketAmount / 50));
    pocketAmount = pocketAmount % 50;
}
if (pocketAmount >= 20) {
    console.log("20 notes : " + Math.floor(pocketAmount / 20));
    pocketAmount = pocketAmount % 20;
}
if (pocketAmount >= 10) {
    console.log("10 notes : " + Math.floor(pocketAmount / 10));
    pocketAmount = pocketAmount % 10;
}
if (pocketAmount >= 5) {
    console.log("5 coins : " + Math.floor(pocketAmount / 5));
    pocketAmount = pocketAmount % 5;
}
if (pocketAmount >= 2) {
    console.log("2 coins : " + Math.floor(pocketAmount / 2));
    pocketAmount = pocketAmount % 2;
}
if (pocketAmount === 1) {
    console.log("1 coin : " + pocketAmount);
}


// Ternary operator ? :
112 > 13 ? console.log("heyehye") : console.log("hoho");


// Nested ternary operator
let checkNumber = 0;
console.log(checkNumber > 0 ? "Positive" : checkNumber < 0 ? "Negative" : "Zero");


// Switch case
let dayOfWeek = 2;
switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}
