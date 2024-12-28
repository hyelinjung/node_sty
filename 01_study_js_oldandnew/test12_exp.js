var Calc = require('./test12_module_and_eventlistener');
//var Cal = require('./test12_module_and_eventlistener');

var calc = new Calc();
calc.emit('stop');

console.log('전달');