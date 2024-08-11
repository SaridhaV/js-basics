let input = "1 2 3 4";
let arr = input.split(' ').map(Number);
for (let i = 0; i < arr.length; i++) {
    let mul = arr[i] * arr[i];
    console.log(`Square of element ${arr[i]} is: ${mul}`);
}
let sums = arr.reduce((acc, num) => acc + num, 0);
console.log("Sum of the array is:", sums);
