const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config.js');
const client = new Client();
client.commands = new Collection();

const commandsFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(`${commandsFiles} 🔧`);

for(const file of commandsFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`${client.commands}  🗃️`);
    console.log(`Loading: ${command.name} 🔄`);
}

client.on('ready', () => {
  console.log(`Sanji à votre service ${client.user.tag} 👨‍🍳`);
});

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;
    client.commands.get(command).execute(client, message, args);
});

client.login(TOKEN);