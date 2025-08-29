// Left rotation by 1 element
let arr1 = [1, 2, 3, 4, 5];
let copy1 = arr1[0];
for (let i = 0; i < arr1.length - 1; i++) {
  arr1[i] = arr1[i + 1];
}
arr1[arr1.length - 1] = copy1;
console.log(arr1);

// Right rotation by 1 element
let arr2 = [1, 2, 3, 4, 5];

const copy2 = arr2[arr2.length - 1];
for (let i = arr2.length - 1; i > 0; i--) {
  arr2[i] = arr2[i - 1];
  // 4 -> 5
  // 3 -> 4
  // 2 -> 3
  // 1 -> 2
  //
}
arr2[0] = copy2;
console.log(arr2);

// Left rotation by k elements
let arr3 = [1, 2, 3, 4, 5];
let k1 = Number(prompt("Enter k value"));
k1 = k1 % arr3.length;

for (let j = 0; j < k; j++) {
  let copy3 = arr3[0];
  for (let i = 0; i < arr3.length - 1; i++) {
    arr3[i] = arr3[i + 1];
  }
  arr3[arr3.length - 1] = copy3;
}
console.log(arr3);

// Right rotation by k elements
let arr4 = [1, 2, 3, 4, 5];
let k2 = 5;
k2 = k2 % arr4.length;
for (let j = 0; j < k; j++) {
  let copy2 = arr4[arr4.length - 1];
  for (let i = arr4.length - 1; i > 0; i--) {
    arr4[i] = arr4[i - 1];
  }
  arr4[0] = copy2;
}
console.log(arr4);

// Left rotation by k element with efficient way
let arr5 = [1, 2, 3, 4, 5];
let temp = new Array(arr5.length);
let k3 = Number(prompt("Enter k value"));
k3 = k3 % arr5.length;

for (let i = 0; i < arr5.length; i++) {
  temp[i] = arr5[(i + k3) % arr5.length];
}
console.log(temp);

// Left rotation of an Array using reversal algorithm
let arr6 = [1, 2, 3, 4, 5];
let k4 = Number(prompt("Enter a value"));
k4 = k4 % arr6.length;
reverse(0, k4 - 1);
reverse(k4, arr6.length - 1);
reverse(0, arr6.length - 1);
console.log(arr6);

function reverse(i, j) {
  while (i < j) {
    let temp = arr6[i];
    arr6[i] = arr6[j];
    arr6[j] = temp;
    i++;
    j--;
  }
}

// Remove duplicates from sorted array using two pointers algorithm
let nums1 = [1, 1, 2, 2, 3, 4, 4];
let j1 = 1;
for (let i = 0; i < nums1.length - 1; i++) {
  if (nums1[i] != nums1[i + 1]) {
    nums1[j] = nums1[i + 1];
    j1++;
  }
}
console.log(j1);

// Merge two sorted Arrays
let arr7 = [2, 5, 6];
let arr8 = [1, 3, 4, 8];
let merge = new Array(arr7.length + arr8.length);
let i = (j = k = 0);

while (i < arr7.length && j < arr8.length) {
  if (arr7[i] < arr8[j]) {
    merge[k++] = arr7[i++];
  } else {
    merge[k++] = arr8[j++];
  }
}

while (j < arr8.length) {
  merge[k++] = arr8[j++];
}

while (i < arr7.length) {
  merge[k++] = arr7[i++];
}
console.log(merge);
