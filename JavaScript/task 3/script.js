//                                              Home Task 3

// Task 1: What is a conditional statement?
// Answer: A conditional statement is used to perform different actions based on different conditions. 
// Common examples include if-else, switch, and ternary operators.

//                                 +++++++++++++++++++++++++++++++++++++

// Task 2: Check if a number is positive, negative, or zero
// let num = Number(prompt("Enter a number:"));
// if (num > 0) {
//     console.log("The number is positive.");
// } else if (num < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

//                                 +++++++++++++++++++++++++++++++++++++

// // Task 3: Difference between if-else and ternary operator
// // Answer: if-else is a traditional conditional statement, whereas the ternary operator is a shorthand.
// // Example:
// let x = 10;
// let result = (x > 5) ? "Greater than 5" : "Less than or equal to 5";  
// console.log(result);





// //                                 +++++++++++++++++++++++++++++++++++++

// // Task 4: Print all even numbers from 1 to 10 using a for loop

// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }

// //                                 +++++++++++++++++++++++++++++++++++++

// // // Task 5: Check if a number is divisible by 5 using a while loop

// let number = Number(prompt("Enter a number to check divisibility by 5:"));
// while (number % 5 !== 0) {
//     console.log(`${number} is not divisible by 5.`);
//     number = Number(prompt("Enter another number:"));
// }
// console.log(`${number} is divisible by 5.`);









// //                                 +++++++++++++++++++++++++++++++++++++

// Task 6: Difference between while and do-while loops

// Answer: while loop checks the condition before executing the block, whereas do-while executes at least once before checking the condition.

// Example:
// let count = 0;
// while (count < 3) {
//     console.log("While Loop:", count);
//     count++;
// }
// do {
//     console.log("Do-While Loop:", count);
//     count++;
// } while (count < 3);






// //                                 +++++++++++++++++++++++++++++++++++++



// Task 7: Print multiplication table of a number using a for loop
// let tableNum = Number(prompt("Enter a number for its multiplication table:"));
// for (let i = 1; i <= 10; i++) {
//     console.log(`${tableNum} x ${i} = ${tableNum * i}`);}














// // //                                 +++++++++++++++++++++++++++++++++++++

// // Task 8: Count the number of digits in a given number using a while loop
// let inputNum = Number(prompt("Enter a number to count its digits:"));
// let digitCount = 0;
// let temp = inputNum;
// while (temp > 0) {
//     temp = Math.floor(temp / 10);
//     digitCount++;
// }
// console.log(`The number ${inputNum} has ${digitCount} digits.`);










// //                                 +++++++++++++++++++++++++++++++++++++

// // Task 9: Print numbers from 10 to 1 using a for loop (reverse order)
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


//                                 +++++++++++++++++++++++++++++++++++++




// Task 10: Ask the user to input numbers until the sum is greater than 100

let sum = 0;
while (sum <= 100) {
    let userInput = Number(prompt("Enter a number:"));
    sum += userInput;
    console.log(`Current sum: ${sum}`);
}
console.log("Sum exceeded 100.");
