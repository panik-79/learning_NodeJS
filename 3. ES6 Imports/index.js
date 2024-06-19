import { greet, data } from "./greet.js";

// Calling the greet function from greet.js file
greet("Pujan Jain");

// Printing the data variable from greet.js file
console.log(data);

// Output:
// (node:1520) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// (Use `node --trace-warnings ...` to show where the warning was created)
// d:\learning_MERN\NodeJS\3. ES6 Imports\index.js:1
// import { greet, data } from "./greet";

// SyntaxError: Cannot use import statement outside a module

// Reason: The error is because NodeJS does not support ES6 imports by default. To use ES6 imports in NodeJS, we need to set the "type" field in the package.json file to "module" or use the .mjs extension for the file.

// We can fix this error by creating a package.json file and setting the "type" field to "module"

// after creating the package.json file, the code will work fine.

// NOTE : If imports are made then it should contain .js extension or else it will throw an error as ERR_MODULE_NOT_FOUND.