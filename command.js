var fs = require('fs'); 
var chalk = require('chalk'); 

module.exports = {
	pwd: function(userArg) {
		var output = process.env.PWD;
		done(output);
	},
	date: function(userArg) {
		var output = (new Date()).toString(); 
		done(output); 
	}, 
	ls: function(userArg) {
		fs.readdir('.', function(err, data) {
			var output = err ? err : data.toString();
			done(output);
		})
	}, 
	echo: function(userArg) { 
		var output = (userArg[0] === '$' ? process.env[userArg.substring(1)] : userArg);
		done(output);
	}, 
	cat: function(filename) {
		fs.readFile(filename, function(err, data) {
			var output = err ? err : data.toString();
			done(output);
		});
	}, 
	head: function(filename) {
		fs.readFile(filename, function(err, data) {
			var output = err ? err : data.toString().split('\n').slice(0,5).join('\n');
			done(output);
		});
	},
	tail: function(filename) {
		fs.readFile(filename, function(err, data) {
			if (err) {
				var output = err; 
			} else {
				var fileArr = data.toString().split('\n');
				var output = fileArr.slice(fileArr.length-5).join('\n'); 
			}
			done(output);
		});
	}, 
};

function done(output) {
	process.stdout.write(output);
	process.stdout.write(chalk.yellow('\nprompt > '));
}
