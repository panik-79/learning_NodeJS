// Code to export a function and a variable from this file to another file.

const greet = (username) => {
    console.log(`Good Evening, ${username}!`);
}

let data = "I am a data from greet.js file."

// Exporting the function and the variable. 
// Multiple exports can be done in a single line.
module.exports = { greet, data };