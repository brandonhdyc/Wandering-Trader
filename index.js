// straight off the discordjs guide, only need this shitty ass script for loading the commands folder and dynamic execution
const fs = require('fs');
const Discord = require('discord.js');
const prefix = require('./config.json');
const token = require('./token.json')
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix.prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token.token);
client.on("ready", () => {
	client.user.setActivity('For trades... (t!)', { type: 'WATCHING' });

});