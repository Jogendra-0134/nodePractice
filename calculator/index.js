const readline = require('readline');

const ioInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionInput = function() {
 let first, second;
 ioInterface.question('First Number : ', (answer) => {first = answer});
 ioInterface.question('Second Number : ', (answer) => {second = answer});
 
 return {first, second};
}

function operation(operation) {
  let {first,second} = questionInput();
  ioInterface.close();
  printResult(operation, first, second);
}


function printResult(operation, first, second) {
 let result;
 
 switch(operation) {
  case 'add':
    result = first+second;
    break;
  case 'subtract':
    result = first-second;
    break;
  case 'multiply':
    result = first*second;
    break;
  case 'division':
    result = first/second;
    break;
 }

 console.log("Result : ", result);
}


module.exports = operation;
