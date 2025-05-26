console.log("hello");
console.log("world");

// "hello world"
process.stdout.write("hello ");
process.stdout.write("world\n");

// i want this prompt to be shown in my terminal. so for that we have to install the package called prompt-sync
let prompt = require("prompt-sync")();
let a = Number(prompt("Enter a number "));
process.stdout.write(`${a}\n`);

process.stdout.write("*");
process.stdout.write("*");
process.stdout.write("*");
process.stdout.write("*");
process.stdout.write("*\n");

for (let i = 1; i <= a; i++) {
  process.stdout.write("*");
}
console.log();
for (let i = 1; i <= a; i++) {
  process.stdout.write("*");
}
console.log();
for (let i = 1; i <= a; i++) {
  process.stdout.write("*");
}
console.log();
for (let i = 1; i <= a; i++) {
  process.stdout.write("*");
}
console.log();
for (let i = 1; i <= a; i++) {
  process.stdout.write("*");
}
console.log();

for (let i = 1; i <= a; i++) {
  for (let j = 1; j <= a; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// right angel triangel star pattern
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// right angle triangel number pattern
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${j}`);
  }
  console.log();
}

// right angel triangle alphabet pattern
for (let i = 1; i <= 5; i++) {
  let ascii = 65;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(ascii));
    ascii++;
  }
  console.log();
}

// Inverted right angle triangle
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    process.stdout.write("* ");
  }
  console.log();
}
