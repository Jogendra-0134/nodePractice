const yargs = require('yargs');
const calculator = require('calculator');

//yargs.version('2.2.4');

yargs.command({
 command: 'note',
 describe: 'Displaying welcome note',
 handler: function () { require('./noteApp') }
});


yargs.command({
 command: 'log',
 describe: 'Printing log',
 handler: function () { require('./printingLog') }
});

yargs.command({
 command: 'calc',
 describe: 'calculating...',
 handler: function (argv) { console.log(argv);calculator(argv.operation) }
});


yargs.parse();



//const option = process.argv[2];

//switch(option) {
 //case 'note':
  //note app
  //require('./noteApp');
  //break;
 //case 'log':
  //printing log
  //require('./printingLog');
  //break;	
 //default:
//}
