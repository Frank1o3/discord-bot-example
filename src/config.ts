import {
    GatewayIntentBits,
    SlashCommandBuilder,
    SlashCommandUserOption,
} from "discord.js";

export const intents = [
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
];

const command = new SlashCommandBuilder();
command.setName("ping");

export const Commands = [
    {
        data: new SlashCommandBuilder()
            .setName("ping")
            .setDescription("Replies with Pong!")
            .setDMPermission(true),
    },
    {
        data: new SlashCommandBuilder()
            .setName("status")
            .setDescription("Replies with Pong!")
            .setDMPermission(true),
    },
];
