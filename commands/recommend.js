const { SlashCommandBuilder } = require("discord.js");

module.exports={

    data: new SlashCommandBuilder()
    .setName('recommend')
    .setDescription('Recomenda uma musica aleatoria.'),

    

    async execute(interaction){
        const array = require('../data.json');
        console.log(array);

        const song = array[Math.floor(Math.random()*array.length)];
        console.log(song);

        const name = song.name;
        const artist = song.artist;


        await interaction.reply(`**` + artist + `**` + ` - ` + `**` + name + `**` + ` is what you should listen to.`);
},
};