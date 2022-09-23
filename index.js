import dotenv from 'dotenv'
dotenv.config()

import{
    Client,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} from 'discord.js';

import { Client } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildsMessages,
        GatewayIntentBits.GuildsMembers,
        GatewayIntentBits.DirectMessages,
    ],
});

client.login(process.env.DISCORD_TOKEN);


client.on("messageCreate", async(message) =>{

    console.log(message)

    if (!message?.author.bot){
        message.author.send({
            content: 'Push my button',
            components: [btn]
        });
    }
})

const btn = new ButtonBuilder()
        .setCustomId('hiMom')
        .setLabel('Say Hi To mom')
        .setStyle(ButtonStyle.Primary);

client.on('ineractionCreate', async interaction =>{
    if(interaction.customId == 'hiMom'){
        await interaction.reply({
            content: 'Mom says Hi back',
            ephemeral: true
        });
    }
})