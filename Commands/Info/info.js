const { MessageEmbed } = require('discord.js');

module.exports = {
    help: {
        name: 'botinfo',
        aliases: ['info'],
        description: 'Shows the stats of the Bot',
        category: __dirname.split("Commands\\")[1]
    },
    run: async (client, message, args) => {

        const mapping = {
            " ": "  ",
            "0": ":zero:",
            "1": ":one:",
            "2": ":two:",
            "3": ":three:",
            "4": ":four:",
            "5": ":five:",
            "6": ":six:",
            "7": ":seven:",
            "8": ":eight:",
            "9": ":nine:",
            "!": "!",
            "?": "?",
            "#": "#",
            "*": "*"
        };

        "abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
            mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
        });
        let guilds;
        let channels;
        let users;
        setTimeout(() => {
            guilds =
                `${client.guilds.cache.size}`
                    .split("")
                    .map(c => mapping[c] || c)
                    .join("")
            channels =
                `${client.channels.cache.size}`
                    .split("")
                    .map(c => mapping[c] || c)
                    .join("")
            let sayy = 0;
            client.guilds.cache.forEach(x => {
                sayy += x.memberCount
            });
            users =
                `${sayy}`
                    .split("")
                    .map(c => mapping[c] || c)
                    .join("")
        }, 200)

        setTimeout(() => {
            const embed = new MessageEmbed()
                .setImage("https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg")
                .setThumbnail(client.user.avatarURL())
                .setDescription("**കൊച്ചുമുതലാളി Bot Project.**" + "\n\n <a:pyramid:757488922354909184> **Number of servers serviced :** " + guilds +
                    "\n <a:pyramid:757488922354909184> **Number of channels served : ** " + channels +
                    "\n <a:pyramid:757488922354909184> **Number of users served : ** " + users +
                    "\n\n<:discordbotdev:757489652214267904> **Developers:** \n <@822098497586462750>")
                .addField("Invite Link: ", `**[Click Here!](https://discord.com/api/oauth2/authorize?client_id=882156367778021387&permissions=8&scope=bot)**`, true)
                .addField("Developer:", `**[Click Here!](https://albinpraveen.ml)**`, true)
                .setTimestamp()
                .setFooter('© കൊച്ചുമുതലാളി', 'https://images.hdqwalls.com/wallpapers/neon-bot-ck.jpg')
                .setColor(config.embedcolor);
            message.react('755471130315194399')
            message.channel.send(embed)
        }, 500)
    }
}
