// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Define a function to calculate the sum of an array of numbers using the spread operator
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

// Call the sum function with the spread operator
const result = sum(...numbers);

// Display the array and sum in the HTML page
document.getElementById("arr").innerHTML = `[${numbers}]`;
document.getElementById("sum").innerHTML = result;
