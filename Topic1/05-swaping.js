// Method 1: swap with extra variable
let a = 10;
let b = 20;

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// Method 2: swap with simple math
let d = 10;
let e = 20;

d = d + e; // 30
e = d - e; // 10
d = d - e; // 20

console.log(d);
console.log(e);

// Method 3: swap with destructuring
let f = 10;
let g = 20;

[f, g] = [g, f];

console.log(f);
console.log(g);
