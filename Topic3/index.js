// for loop
for (let i = 0; i < 23; i++) {
    console.log(i);
}


// Question: print n hello worlds
for (let i = 1; i < 101; i++) {
    console.log(`${i} Hello World`);
}


// Question: One to n number and vice versa
for (var i = 1; i < 10; i++) {
    console.log(i);
}
console.log(i);

for (let i = 1; i <= 20; i++) {
    console.log(i);
}


// Question: Sum of n natural numbers
let pr = prompt("kaha tak add karwaaoge ?");

if (pr === null) {
    console.log("cancelled");
} else {
    let n = Number(pr);

    if (isNaN(n)) {
        console.log("Invalid Input");
    } else {
        if (n > 0) {
            let sum = 0;
            for (let i = 1; i <= n; i++) {
                sum += i;
            }
            console.log(sum);
        } else {
            console.log("should be + & more than 0")
        }
    }
}


// Question: factorial
let prompt = prompt("kaha tak add karwaaoge ?");

if (prompt === null) {
    console.log("cancelled");
} else {
    let n = Number(prompt);

    if (isNaN(n)) {
        console.log("Invalid Input");
    } else {
        if (n > 0) {
            let fact = 1;
            for (let i = 1; i <= n; i++) {
                fact *= i;
            }
            console.log(fact);
        } else {
            console.log("should be + & more than 0")
        }
    }
}


// Factors of number
let pr1 = prompt("kaha tak add karwaaoge ?");

if (pr1 === null) {
    console.log("cancelled");
} else {
    let n = Number(pr1);

    if (isNaN(n)) {
        console.log("Invalid Input");
    } else {
        if (n > 0) {
            for (let i = 1; i <= Math.floor(n / 2); i++) {
                if (n % i === 0) {
                    console.log(i);
                }
            }
            console.log(n);
        } else {
            console.log("should be + & more than 0")
        }
    }
}


// Question: Prime Number
let pr2 = prompt("kaha tak add karwaaoge ?");

if (pr2 === null) {
    console.log("cancelled");
} else {
    let n = Number(pr2);

    if (isNaN(n)) {
        console.log("Invalid Input");
    } else {
        if (n > 0) {
            let _isPrime = true;
            for (let i = 2; i < Math.floor(n / 2); i++) {
                if (n % i === 0) {
                    _isPrime = false;
                    break;
                }
            }
            console.log(_isPrime);
        } else {
            console.log("should be + & more than 0")
        }
    }
}


// Break & continue
for (let i = 1; i < 23; i++) {
    if (i === 11) break;
    else console.log(i)
}

for (let i = 1; i < 11; i++) {
    if (i === 9) continue;
    else console.log(i);
}


// while loop
let i = 10;
while (i < 11) {
    console.log(i);
    i++;
}

let pr3 = prompt("enter the number or (exit to close)");
while (pr3 !== "exit") {
    console.log(pr3);
}


// Question: sum of digits
let pr4 = prompt("kaha tak add karwaaoge ?");

if (pr4 === null) {
    console.log("cancelled");
} else {
    let n = Number(pr4);

    if (isNaN(n)) {
        console.log("Invalid Input");
    } else {
        if (n > 0) {
            let sum = 0;
            while (n > 0) {
                let rem = n % 10;
                sum += rem;
                n = Math.floor(n / 10);
            }
            console.log((sum));
        } else {
            console.log("should be + & more than 0")
        }
    }
}


// Question: reverse the number
let pr5 = prompt("kaha tak add karwaaoge ?");

if (pr5 === null) {
    console.log("cancelled");
} else {
    let n = Number(pr5);

    if (isNaN(n)) {
        console.log("Invalid Input");
    } else {
        if (n > 0) {
            let rev = 0;
            while (n > 0) {
                let rem = n % 10;
                rev *= 10 + rem;
                n = Math.floor(n / 10);
            }
            console.log(rev);
        } else {
            console.log("should be + & more than 0")
        }
    }
}


// Queston: strong number
let pr6 = prompt("kaha tak add karwaaoge ?");

if (pr6 === null) {
    console.log("cancelled");
} else {
    let n = Number(pr6);

    if (isNaN(n)) {
        console.log("Invalid Input");
    } else {
        if (n > 0) {
            let sum = 0;
            let copy = n;
            while (n > 0) {
                let rem = n % 10;
                let fact = 1;
                for (let i = 1; i <= rem; i++) {
                    fact *= i;
                }
                sum += fact;
                n = Math.floor(n / 10);
            }
            if (n === sum) {
                console.log("strong");
            } else {
                console.log("not strong");
            }
        } else {
            console.log("should be + & more than 0")
        }
    }
}


// do-white loop
let i = 1;
do {
    console.log("hello");
    i++;
}
while (i < 10);


// Question: Guess the number
let random = Math.floor(Math.random() * 100 + 1);
let guess = 0;
while (guess !== random) {
    guess = Number(propmt("Guess the number"));
    if (isNaN(guess) || guess < 1 || guess < 100) {
        console.log("Invalid Input. Try Again b/w 1 - 100");
        continue;
    }
    if (guess > random) {
        console.log("to high, try again");
    } else if (guess < random) {
        console.log("to low, try again");
    } else {
        console.log("Congrats & number was", guess);
    }
}
