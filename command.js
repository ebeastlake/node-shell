module.exports = {
	pwd: function() {
		var currDir = process.env.PWD;
		process.stdout.write(currDir);
	}

};