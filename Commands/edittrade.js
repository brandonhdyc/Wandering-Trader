const fs = require('fs');

module.exports = {
	name: 'et',
	description: 'edit a trade',
	execute(message, args) {
		if (args[1] == "item") {
			function readWriteAsync() {
				const { items } = require('../orders/' + args[0] + ".json");
				var fileToEdit = "./orders/" + args[0] + ".json";
				fs.readFile(fileToEdit, 'utf-8', function (err, data) {
					if (err) throw err;
					var toEdit = '"items": "' + items +'",';
					var toEdit2 = '"items": "' + args[2] + '",';
					var newValue = data.replace(toEdit, toEdit2);

					fs.writeFile(fileToEdit, newValue, 'utf-8', function (err) {
						if (err) throw err;
						console.log('changed file');
						message.reply('done');
					});
				});
			}

			readWriteAsync();
		}
		if (args[1] == "accepted") {
			function readWriteAsync() {
				const { accepted } = require('../orders/' + args[0] + ".json");
				var fileToEdit = "./orders/" + args[0] + ".json";
				fs.readFile(fileToEdit, 'utf-8', function (err, data) {
					if (err) throw err;
					var toEdit = '"accepted": ' + accepted +',';
					var toEdit2 = '"accepted": ' + args[2] + ',';
					var newValue = data.replace(toEdit, toEdit2);

					fs.writeFile(fileToEdit, newValue, 'utf-8', function (err) {
						if (err) throw err;
						console.log('changed file');
						message.reply('done');
					});
				});
			}

			readWriteAsync();
		}
		if (args[1] == "completed") {
			function readWriteAsync() {
				const { completed } = require('../orders/' + args[0] + ".json");
				var fileToEdit = "./orders/" + args[0] + ".json";
				fs.readFile(fileToEdit, 'utf-8', function (err, data) {
					if (err) throw err;
					var toEdit = '"completed": ' + completed +',';
					var toEdit2 = '"completed": ' + args[2] + ',';
					var newValue = data.replace(toEdit, toEdit2);

					fs.writeFile(fileToEdit, newValue, 'utf-8', function (err) {
						if (err) throw err;
						console.log('changed file');
						message.reply('done');
					});
				});
			}

			readWriteAsync();
		}
		if (args[1] == "private") {
			function readWriteAsync() {
				const { private } = require('../orders/' + args[0] + ".json");
				var fileToEdit = "./orders/" + args[0] + ".json";
				fs.readFile(fileToEdit, 'utf-8', function (err, data) {
					if (err) throw err;
					var toEdit = '"private": ' + private;
					var toEdit2 = '"private": ' + args[2];
					var newValue = data.replace(toEdit, toEdit2);

					fs.writeFile(fileToEdit, newValue, 'utf-8', function (err) {
						if (err) throw err;
						console.log('changed file');
						message.reply('done');
					});
				});

			}

			readWriteAsync();
		}
	},
};
