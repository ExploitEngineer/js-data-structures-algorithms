let arr = [];
arr.push(100);
arr.push(10);
arr.push("ali");
arr.push(false);

console.log(arr[0]);

console.log(arr);
arr.pop();
console.log(arr);

let arr1 = new Array(3);
arr1[0] = 100;
arr1[1] = 90;
arr1[2] = 80;
arr1[3] = 70;
console.log(arr1);

let arr2 = new Array(5);
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = Number(prompt("Enter a value"));
}
console.log(arr2);

// sum of array
let arr3 = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
  sum += arr3[i];
}
console.log(sum);

// max
let arr4 = [10, 2, 78, 100, 4];
let max = arr4[0];
for (let i = 0; i < arr4.length; i++) {
  if (max < arr4[i]) {
    max = arr4[i];
  }
}
console.log(max);

// Second max
let arr5 = [10, 30, 56, 43, 29, 64, 49, 60];
let max1 = Math.max(arr5[0], arr5[1]);
let sMax = Math.min(arr5[0], arr5[1]);
for (let i = 2; i < arr5.length; i++) {
  if (arr5[i] > max) {
    sMax = max;
    mar = arr5[i];
  } else if (arr5[i] > sMax && max != arr5[i]) {
    sMax = arr5[i];
  }
}
console.log(sMax);

// Reverse Array with extra space
let arr6 = [10, 20, 30, 40, 50];
let temp = new Array(arr6.length);

let j = 0;
for (let i = arr6.length - 1; i >= 0; i--) {
  temp[j] = arr6[i];
  j++;
}
console.log(temp);

// my logic with push
let arr7 = [10, 20, 30, 40, 50];
let newArr7 = [];

for (let i = arr.length - 1; i >= 0; i--) {
  mainArr7.push(arr7[i]);
}
console.log(mainArr7);

// Reverse Array with no extra space & no extra array
let arr8 = [10, 20, 30, 40, 50];
let i = 0;
let k = arr8.length - 1;

while (i !== j) {
  let temp = arr8[i];
  arr8[i] = arr8[j];
  arr8[j] = temp;
  i++;
  j--;
}
console.log(arr8);

// 0s on the left and 1s on right -> two pointer theory
let arr9 = [0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0];
let b = 0;
for (let i = 0; i < arr9.length; i++) {
  if (arr9[i] === 0) {
    let temp = arr9[b];
    arr9[b] = arr9[i];
    arr9[i] = temp;
    b++;
  }
}
console.log(arr9);

// 0s on the left and 1s on right using while loop -> two pointer theory
let arr10 = [0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0];
let e = 0;
let f = 0;
while (e < arr10.length) {
  if (arr10[e] === 0) {
    let temp = arr10[f];
    arr10[f] = arr10[e];
    arr10[e] = temp;
    f++;
  }
  e++;
}
console.log(arr10);

// left rotation by 1 element
let arr11 = [1, 2, 3, 4];
let copy = arr11[0];

for (let i = 0; i < arr11.length - 1; i++) {
  arr11[i] = arr11[i + 1];
}
arr11[arr11.length - 1] = copy;
console.log(arr11);

// right rotation by 1 element
let arr12 = [1, 2, 3, 4, 5];
let copyarr12 = arr12[arr12.length - 1];

for (let i = arr.length - 1; i > 0; i--) {
  arr12[i] = arr12[i - 1];
}
arr12[0] = copyarr12;
console.log(arr12);
