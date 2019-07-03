const readline = require('readline');
const getNote = require('./note.js');

const ioInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

debugger;

ioInterface.question('What is your name : ', (answer) => {
  printMsg(answer);
  ioInterface.close();
});

function printMsg(name) {
 let welcomeNote = getNote(name);
 console.log(welcomeNote);
}


