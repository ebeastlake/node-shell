var commands = require('./command');
var chalk = require('chalk'); 

process.stdout.write(chalk.yellow('prompt > '));

process.stdin.on('data', function(data) {
	var input = data.toString().trim().split(" "); 
	var userCommand = input[0]; 
	var userArg = input.slice(1).join(" ");

	commands[userCommand](userArg);
})