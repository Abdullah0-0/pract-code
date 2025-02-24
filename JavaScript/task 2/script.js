//                                      /* Home Task 2*/

// // Question 1: What are variables in JavaScript?

// // Variables are containers used to store data values.
// // Example:
// const name = "John";
// let age = 25;
// let isStudent = true;

// //                                    +++++++++++++++++++++++++

// // Question 2: What are the rules for naming variables?

// // 1. Variable names are case-sensitive.
// // 2. They must begin with a letter, underscore (_), or dollar sign ($).
// // 3. Cannot use JavaScript reserved keywords (e.g., var, let, function).
// // 4. Must not contain spaces or special characters (except _ and $).
// // 5. Use camelCase for naming (e.g., myVariableName).

// //                                    +++++++++++++++++++++++++

// // Question 3: What are the different data types in JavaScript?

// // JavaScript has the following data types:
// // 1. String  -> "Hello"
// // 2. Number  -> 10, 3.14
// // 3. Boolean -> true, false
// // 4. Undefined -> A variable declared but not assigned a value
// // 5. Null -> A value that represents "nothing"
// // 6. Object -> {name: "John", age: 25}
// // 7. Array -> [1, 2, 3, 4, 5]

//                                     +++++++++++++++++++++++++


// Question 4: What is the difference between == and ===?

// == compares values but ignores data types (loose equality)
// === compares both values and data types (strict equality)
// // Example:
// console.log(5 == "5");  // true (because JavaScript converts "5" to a number)
// console.log(5 === "5"); // false (because types are different)



// //                                    +++++++++++++++++++++++++

// // Question 5: Convert "10" to a number using JavaScript.
// let str = "10";
// let num = Number(str); // Converts string to number
// console.log(num); // Output: 10

























// //                                    +++++++++++++++++++++++++

// // Question 6: What will be the output of 5 + "5"?

// console.log(5 + "5"); // Output: "55" 





// //                                    +++++++++++++++++++++++++






// // Question 7: What is the result of true && false?

// console.log(true && false); // Output: false (because both need to be true)






// // Question 8: What is the difference between null and undefined?

// // null -> Intentionally empty value
// // undefined -> A variable declared but not assigned a value
// let x = null;  // x has no value
// let y;  // y is undefined

// console.log(x); 
// console.log(y); 








// // Question 9: What is the difference between alert, prompt, and confirm?

// alert() -> Displays a message box with "OK" button
// alert("Hello, this is an alert!");

// // prompt() -> Asks user for input and returns the input as a string
// let userInput = prompt("Enter your name:");

// // confirm() -> Asks user for confirmation (OK/Cancel), returns true or false
// let result = confirm("Are you sure?");




// // Question 10: Write a JavaScript script to swap two numbers.
let a = 5, b = 10;
console.log(`Before : a = ${a}, b = ${b}`);

[a, b] = [b, a]; // Swapping without a temporary variable
console.log(`After : a = ${a}, b = ${b}`);
