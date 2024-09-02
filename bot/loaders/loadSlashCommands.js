const Discord = require("discord.js")
const { REST } = require("@discordjs/rest")
const { Routes, SlashCommandBuilder } = require("discord.js")

module.exports = async bot => {
    let commands = []

    bot.commands.forEach(async command => {
        let slashcommand = new SlashCommandBuilder()
            .setName(command.name)
            .setDescription(command.description)
            .setDMPermission(command.dm)
            .setDefaultMemberPermissions(command.permission === "Aucune" ? null : command.permission)

        if (command.options?.length >= 1) {
            for (let i = 0; i < command.options.length; i++) {
                const option = command.options[i];
                switch (option.type) {
                    case 'String':
                        slashcommand.addStringOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required));
                        break;
                    case 'Integer':
                        slashcommand.addIntegerOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required));
                        break;
                    case 'Boolean':
                        slashcommand.addBooleanOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required));
                        break;
                    case 'User':
                        slashcommand.addUserOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required));
                        break;
                    case 'Channel':
                        slashcommand.addChannelOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required));
                        break;
                    case 'Role':
                        slashcommand.addRoleOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required));
                        break;
                    case 'Mentionable':
                        slashcommand.addMentionableOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required));
                        break;
                    case 'Number':
                        slashcommand.addNumberOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required));
                        break;
                    case 'Attachment':
                        slashcommand.addAttachmentOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required));
                        break;
                    // Add other cases as needed
                    default:
                        console.error(`Unsupported option type: ${option.type}`);
                        break;
                }
            }
        }

        commands.push(slashcommand);
    })

    const rest = new REST({ version: "10" }).setToken(bot.token);
    await rest.put(Routes.applicationCommands(bot.user.id), { body: commands });
    console.log("Les slashs commandes sont créées avec succès");
}
