const { Client } = require('discord.js');
const { TOKEN, PREFIX } = require('./config.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Sanji à votre service ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '/sanji') {
    msg.reply('**S\'allume une clope**  🚬');
  }
});

client.login(TOKEN);