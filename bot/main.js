const Discord = require("discord.js") //Importe Discord.js
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents}) //Intents = les permissions de discord (3276799 = tout)
const config = require("./config.js")
const loadCommands = require("./loaders/loadCommands.js") //charge les commandes
const loadEvents = require("./loaders/loadEvents.js") //charge les events

bot.commands = new Discord.Collection() //va sauvegarder les commandes
bot.color = "#ffffff"

bot.login(config.token)
loadCommands(bot) //va carger les commandes
loadEvents(bot) //va carger les events
