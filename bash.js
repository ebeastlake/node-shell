var commands = require('./command');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
	var userCommand = data.toString().trim();

	commands[userCommand]();

	if (userCommand === 'date') {
		var currDate = (new Date()).toString();
		process.stdout.write(currDate);
	}

	process.stdout.write('\nprompt > ');

})