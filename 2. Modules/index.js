// require is a function provided by NodeJS to import modules from other files

// In this case, it returns the object { greet, data } from greet.js file

// Used to import the greet function from greet.js file
const greet = require('./greet').greet;
// Used to import the data variable from greet.js file
let data = require('./greet').data;

// another way to import the greet function and data variable is to directly destruct the object returned by require function
// const { greet, data } = require('./greet');

// Calling the greet function from greet.js file
greet("Pujan Jain");
// Printing the data variable from greet.js file
console.log(data);