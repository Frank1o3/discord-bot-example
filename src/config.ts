import { GatewayIntentBits } from 'discord.js';

export const intents = [
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds
];

export const Commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!'
    },
    {
        name: 'status',
        description: 'Bot Status',
    },
]