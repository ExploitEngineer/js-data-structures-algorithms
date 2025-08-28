// Left rotation by 1 element
let arr1 = [1, 2, 3, 4, 5];
let copy = arr1[0];
for (let i = 0; i < arr1.length - 1; i++) {
  arr1[i] = arr1[i + 1];
}
arr1[arr1.length - 1] = copy;
console.log(arr1);
