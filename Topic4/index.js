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

// mirror right angle triangle
for (let i = 1; i <= 5; i++) {
  // inverted
  for (let j = 1; j <= 5 - i; j++) {
    process.stdout.write("  ");
  }

  // right
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// X pattern
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === i || j + i === 5 + 1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}

// V pattern
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 2 * 5 - 1; j++) {
    if (j === i || j + i === 9 + 1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}

// triangle pattern
let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    process.stdout.write("*");
  }
  console.log();
}
