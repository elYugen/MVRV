const Discord = require("discord.js")

module.exports = async(bot, interaction) => {
    if(interaction.type === Discord.InteractionType.ApplicationCommand) {
        try {
            let command = require(`../commands/${interaction.commandName}`)
            if(command.execute) {
                await command.execute(interaction, bot);
            } else {
                console.error(`La commande ${interaction.commandName} n'a pas de méthode execute.`);
                await interaction.reply({ content: "Désolé, cette commande n'est pas correctement configurée.", ephemeral: true });
            }
        } catch (error) {
            console.error(`Erreur lors de l'exécution de la commande ${interaction.commandName}:`, error);
            await interaction.reply({ content: "Une erreur s'est produite lors de l'exécution de cette commande.", ephemeral: true });
        }
    }
}