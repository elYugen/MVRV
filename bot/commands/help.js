const Discord = require("discord.js")

module.exports = {
    name: "help", 
    description: "Toutes les commandes disponibles",
    permission: "Aucune",
    dm: false,
    category: "Informations",
    options: [
        {
            type:"string",
            name:"commande",
            description:"La commadne à afficher",
            required:false
        }
    ],


    async run(bot, message, args) {
        
        let command
        if(args.getString("commande")) {
            command = bot.commands.get(args.getString("commande"))
            if(!command) return message.reply("Pas de commande")
        }

        if(!command) {
            let categories = []
            bot.commands.forEach(command => {
                if(!categories.includes(command.category)) categories.push(command.category)
            })

            let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setTitle(`Commandes du bot`)
            .setThumbnail(bot.user.displayAvatarURL({dynamic:true}))
            .setDescription(`Commandes disponibles : \`${bot.commands.size}\`\nCatégories disponibles : \`${categories.length}\``)
            .setTimestamp()
            .setFooter({text: "Commandes du robot"})

            await categories.sort().forEach(async cat => {
                let commands = bot.commands.filter(cmd => cmd.category === cat)
                Embed.addFields({name: `${cat}`, value: `${commands.map(cmd => `\`${cmd.name}\` : ${cmd.description}`).join("\n")}`})
            })

            await message.reply({embeds: [Embed]})
        }
    }
}