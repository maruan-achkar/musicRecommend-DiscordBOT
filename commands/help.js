const { SlashCommandBuilder } = require("discord.js");

module.exports={

    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Info about the bot.'),

    async execute(interaction){
        const {creator} = require('../config.json');

        await interaction.reply('**' + 'THIS BOT WAS CREATED BY ' + user + '**' + '\n' + '\n' + '**/add** to add songs to the datase.' + '\n' + '**/recommend** will send you a random song from the database, you should really listen to it!');
},
};