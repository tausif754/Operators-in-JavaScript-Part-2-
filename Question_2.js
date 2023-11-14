/*Question-2 Describe the usage of the comma operator in JavaScript and provide an example.*/


/*The comma operator in JavaScript allows you to combine multiple expressions into a single expression. 
It evaluates each of its operands (from left to right) and returns the value of the last operand.
 While the comma operator is not commonly used, it can be handy in specific situations, 
 such as when you want to include multiple expressions in a place where only one expression is expected.*/

 //  Syntax: expression1, expression2, expression3, ..., expressionN
 //Example
 // Using the comma operator to combine expressions
let a = 5, b = 10, c = 15;

// The value of the entire expression is the value of the last operand
let result = (a++, b++, c++);

// Displaying the result
console.log(result); // Output: 15

// Displaying the updated values of a, b, and c
console.log(a, b, c); // Output: 6 11 16


