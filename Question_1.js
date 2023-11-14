/*Question-1 Explain the usage of ternary operator with syntax and write a program to check whether the number is even
or odd using the ternary operator.

The ternary operator in JavaScript is a concise way to write simple conditional statements.
 It's often used as a shorthand for the if-else statement. The syntax of the ternary operator is as follows:*/

//  syntax:- condition ? expression_if_true : expression_if_false;
// Example number
let number = 80;

// Using the ternary operator to check even or odd
let result = number % 2 === 0 ? "Even" : "Odd";

// Displaying the result
console.log(`${number} is ${result}`);


