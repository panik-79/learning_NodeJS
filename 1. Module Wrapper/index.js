// this is how we write a simple code in js
// console.log("hello world");

// but when we run this code in nodejs, it wraps our code in a function like below
(function (exports, require, module, __filename, __dirname) {
    console.log("hello world");
});

// Above is an IIFE function which is immediately invoked function expression 
// and it is wrapped around the code we write in js file
// and this is how nodejs wraps our code and executes it in the background
