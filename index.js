const { Client, RichEmbed } = require('discord.js');
const bot = new Client();

const token = 'NjQwNzMwMzA2Njc2MTI5ODAz.Xb-FAg.xj7ZDwalvQxqUrXZzPkhuXvb_bA';

const PREFIX = '!';


bot.on("ready", () => {
    console.log("arlo's hub is ready to fuck shit up");

    bot.user.setStatus('dnd')
})

bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "e");
    if (!channel) return;

    channel.send(`Welcome peasant, ${member} (you're lucky you got access)`)
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");


    switch (args[0]) {
        case 'getkey':
            const Embed = new RichEmbed()
                .setTitle("Arlo's Hub by Arlo")
                .setAuthor("Arlo's Hub Private Lifetime Key")
                .setColor(0x00AFFF)
                .setDescription("Your generated key: ``privatekey_1922``");

            message.author.send(Embed);
            break;
    }

    switch (args[0]) {
        case 'getscript':
            const Embed = new RichEmbed()
                .setTitle("Arlo's Hub Private Script")
                .setColor(0x00AFFF)
                .setDescription("Arlo's Hub Private Script: Still in development");

            message.author.send(Embed);
            break;
    }

    switch (args[0]) {
        case 'getkey':
            const Embed = new RichEmbed()
                .setTitle("Successfully sent your key")
                .setColor(0x00AFFF)
                .setDescription("Check your DM's");

            message.reply(Embed);
            break;
    }

    switch (args[0]) {
        case 'getscript':
            const Embed = new RichEmbed()
                .setTitle("Successfully sent you the script")
                .setColor(0x00AFFF)
                .setDescription("Check your DM's");

            message.reply(Embed);
            break;
    }

});

bot.login(token);