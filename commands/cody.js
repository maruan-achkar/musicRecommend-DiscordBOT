const { SlashCommandBuilder } = require("discord.js");

module.exports={

    data: new SlashCommandBuilder()
    .setName('cody')
    .setDescription('Replies with Ko'),

    async execute(interaction){
        await interaction.reply('Ko');
},
};