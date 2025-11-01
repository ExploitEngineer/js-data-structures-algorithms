let i = 11;
i = i++ + ++i;
console.log(i);

// ---------------

let a = 11,
  b = 22;
let c = a + b + a++ + b++ + ++a + ++b;
console.log("a=", +a);
console.log("b=" + b);
console.log("c=", c);

// ---------------

let bool = true;
bool++;
console.log(bool);

// ---------------

// let value = 11++; we can't use unary operator on constants directly
// console.log(value);
