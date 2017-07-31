var fs = require('fs'); 
var chalk = require('chalk'); 

module.exports = {
	pwd: function() {
		var currDir = process.env.PWD;
		process.stdout.write(chalk.green(currDir));
	},
	date: function() {
		var currDate = (new Date()).toString(); 
		process.stdout.write(chalk.green(currDate)); 
	}, 
	ls: function() {
		process.stdout.write(chalk.green(fs.readdirSync('.').toString())); 
	}, 
	echo: function(userArg) { 
		var echoData = (userArg[0] === '$' ? process.env[userArg.substring(1)] : userArg);
		process.stdout.write(chalk.green(echoData));
	}

};