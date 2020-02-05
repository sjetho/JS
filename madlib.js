// var nextItem = [];
// nextItem[0] = prompt("Enter your Name.");
// nextItem[1] = prompt("What is your favorite subject in school?");
 
// for(var i = 0; i < nextItem.length; i++)
// {
// nextItem[i];
// }
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var name = []
var subject = []

readline.question('What is your name?', (name) => {
})

readline.question('What is your favorite subject?', (subject) => {
        readline.close
})


var madLib = name + "'s favorite subjexct in school is " + subject + "."

console.log(madLib);