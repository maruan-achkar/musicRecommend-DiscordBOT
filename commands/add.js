const { SlashCommandBuilder } = require('discord.js');

module.exports={

data: new SlashCommandBuilder()
	.setName('add')
	.setDescription('Adiciona uma musica na database.')
	.addStringOption(option =>
		option.setName('artist')
			.setDescription('The artist of the song')
            .setRequired(true))
        .addStringOption(option =>
                option.setName('song')
                    .setDescription('The name of the song')
                    .setRequired(true)),

            async execute(interaction){
                let name = interaction.options.getString('song');
                let artist = interaction.options.getString('artist');
                
                const fs = require('fs');
                const data = { name: name, artist: artist};
                
                const array = require('../data.json');
                
                //console.log(array);
                
                //console.log(array);

                let exist = false;

                //console.log(data.artist);
                //console.log(data.name);


                for(let i=0; i<array.length; i++){
                    if(array[i].name == data.name && array[i].artist == data.artist ){
                        console.log(true);
                        exist = true;  
                    }
                    else{
                        console.log(false);
                    }
                }
                
                array.push(data);

                if(exist==true){
                    await interaction.reply(`This song is already on the datase.`)
                }
                else{


                fs.writeFileSync("data.json", JSON.stringify(array), 'utf8', function (err) {
                    if (err) {
                            console.log("An error occured while writing JSON Object to File.");
                            return console.log(err);
                    }
            
                    console.log("JSON file has been saved.");
                });

                
                await interaction.reply(`**` + artist + `**` + ` - ` + `**` + name + `**` + ` was added to the database.`)
            }
        }  

 };