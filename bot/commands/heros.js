const Discord = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "heros",
    description: "Affiche les informations d'un héros spécifique",
    options: [
        {
            name: "nom",
            description: "Le nom du héros à rechercher",
            type: 3, // STRING type
            required: true
        }
    ],
    async execute(interaction) {
        // Safely retrieve the hero name
        const nomHeros = interaction.options.getString("nom");
        
        if (!nomHeros) {
            return interaction.reply("Veuillez fournir le nom du héros à rechercher.");
        }

        const heroNameTrimmed = nomHeros.trim().toLowerCase();
        console.log('Nom du héros reçu:', heroNameTrimmed);

        try {
            const response = await axios.get(`http://localhost:5555/heros`);

            let heroes = Array.isArray(response.data) ? response.data : [response.data];
            console.log('Nombre de héros reçus:', heroes.length);

            // Log all hero names being compared to help debug
            heroes.forEach(h => console.log(`Comparing with: ${h.name ? h.name.toLowerCase().trim() : "undefined"}`));

            // Find the hero by name (case-insensitive, trimmed)
            let hero = heroes.find(h => h.name && h.name.toLowerCase().trim() === heroNameTrimmed);

            console.log('Héros recherché:', heroNameTrimmed);
            console.log('Héros trouvé:', hero ? JSON.stringify(hero, null, 2) : 'Aucun héros trouvé');

            if (!hero) {
                return interaction.reply(`Aucun héros trouvé avec le nom "${nomHeros}".`);
            }

            const embed = new Discord.EmbedBuilder()
                .setColor("#0099ff")
                .setTitle(hero.name || "Nom inconnu");

            let description = [];
            if (hero.tier) description.push(`Tier: ${hero.tier}`);
            if (hero.health) description.push(`Santé: ${hero.health}`);
            if (hero.difficulty !== undefined) description.push(`Difficulté: ${hero.difficulty}/10`);
            if (hero.category) description.push(`Catégorie: ${hero.category}`);

            embed.setDescription(description.length > 0 ? description.join('\n') : "Aucune information disponible");

            if (hero.sprite) embed.setImage(hero.sprite);
            if (hero.icon) embed.setThumbnail(hero.icon);

            if (hero.passive && hero.passive.length > 0) {
                const passiveText = hero.passive.map(p => `**${p.name}**: ${p.description}`).join('\n\n');
                embed.addFields({ name: "Passifs", value: passiveText || "Aucun passif spécifié" });
            }

            if (hero.spells && hero.spells.length > 0) {
                const spellsText = hero.spells.map(s => `**${s.name}**: ${s.description}`).join('\n\n');
                embed.addFields({ name: "Sorts", value: spellsText || "Aucun sort spécifié" });
            }

            embed.setTimestamp().setFooter({ text: "Informations sur le héros" });

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error("Erreur lors de la récupération des données du héros:", error);
            await interaction.reply("Une erreur s'est produite lors de la récupération des informations du héros.");
        }
    }
};
