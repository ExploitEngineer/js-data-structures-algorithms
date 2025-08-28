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
