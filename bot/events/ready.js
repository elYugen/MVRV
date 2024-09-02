const Discord = require("discord.js")
const loadSlashCommand = require("../loaders/loadSlashCommands")

module.exports = async bot => {
    await loadSlashCommand(bot)
    console.log(`${bot.user.tag} est en ligne !`);
    
    bot.user.setPresence({
        status: 'online',
        activities: [{
            name: 'ta soeur',
            type: Discord.ActivityType.Streaming,
            url: 'https://www.twitch.tv/thelangam'
        }]
    })
}