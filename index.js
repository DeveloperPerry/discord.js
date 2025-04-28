const { Client, IntentsBitField, Message} = require('discord.js');

const client =  new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', (c) => {
    console.log( `${c.user.tag} Hazır!`)
})

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    
    if (message.content == 'sa') {
        message.reply(`**Allah'ın selamı kısaltılmaz ${message.author}!!**`)
    }

    if (message.content == 'Bot müq','bot müq', 'Bot mükemmel', 'bot mükemmel') {
        message.reply(`**Sağolasın ${message.author}!**`)
    }

    if (message.content == 'selamun aleyküm', 'selam', 'Selamun Aleyküm', 'Selam') {
        message.reply(`**Aleyküm Selam ${message.author}**`)
    }
})
client.login(
    'Your TOKEN'
);
