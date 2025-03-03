//                             /*                                    Home Task 4                             */

// // 1. What is a function in JavaScript? Create a function to calculate the square of a number.
// // A function is a reusable block of code that performs a specific task.

// function square(num) {
//   return num * num;
// }
// console.log("Square of 5:", square(5));


















// // 2. Function that takes two numbers and returns their product.
// function multiply(a, b) {
//   return a * b;
// }
// console.log("Product of 4 and 6:", multiply(4, 6));














// // 3. Declare an array of colors. Add a new color to the end and remove the first color.

// let colors = ["Red", "Blue", "Green"];
// colors.push("Yellow"); // Add to the end
// colors.shift(); // Remove first element
// console.log("Updated Colors:", colors);














// // 4. Create an array of numbers and find the sum using a loop.

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let num of numbers) {
//   sum += num;
// }
// console.log("Sum of numbers:", sum);


















// 5. Create an object car with properties and print each property.

// let car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020
// };
// console.log("Car Details:", car.make, car.model, car.year);











// // 6. Function isEven() that checks if a number is even or odd.

// function isEven(num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// }
// console.log("Number 7 is:", isEven(7));
// console.log("Number 8 is:", isEven(8));
// console.log("Number 3 is:", isEven(3));
// console.log("Number 2 is:", isEven(2));












// 7. Create an array of student names and use a loop to print each name.

// let students = ["Ali", "Sara", "Zain"];
// for (let student of students) {
//   console.log("Student:", student);
// }










// 8. Function that returns the largest number in an array.
// function findLargest(arr) {
//   let max = arr[0];
//   for (let num of arr) {
//       if (num > max) max = num;
//   }
//   return max;
// }
// let aray = [3, 7, 2, 19, 5];

// console.log("Largest number:", findLargest(aray));







// // 9. Create an object person and function to display full name.
// let person = {
//   firstName: "Abdullah",
//   lastName: "Jan",
//   getFullName: function() {
//       return this.firstName + " " + this.lastName;
//   }
// };
// console.log("Full Name:", person.getFullName());








// 10. Reverse an array without built-in methods.
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
  }
  return reversed;
}
console.log("Reversed Array:", reverseArray([1, 2, 3, 4]));
