const Discord = require("discord.js")

module.exports = {
    name: "ping", 
    description: "Ping Pong",
    permission: "Aucune",
    dm: false,
    category: "Random",


    async run(bot, message) {
        await message.reply(`Pong: 🏓​`)
    }
}