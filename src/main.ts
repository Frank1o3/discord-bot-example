import * as Discord from "discord.js";
import { intents, Commands } from "./config.js";
import { decrypt, numberToKey } from "./utility.js";
import { readFileSync } from "fs";

interface Data {
    KeyNum: number;
    Token: [string, string];
    AppID: [string, string];
}

const data: Data = JSON.parse(readFileSync("dist/data.json").toString());
const Key = numberToKey(data.KeyNum);
const Token = decrypt({ iv: data.Token[0], encryptedData: data.Token[1] }, Key);
const AppID = decrypt({ iv: data.AppID[0], encryptedData: data.AppID[1] }, Key);

const client = new Discord.Client({ intents: intents });
const rest = new Discord.REST({ version: "10" }).setToken(Token);

async function registerCommands() {
    try {
        console.log("Started refreshing application (/) commands.");
        await rest.put(Discord.Routes.applicationCommands(AppID), {
            body: Commands,
        });
        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }
}

registerCommands();

client.on("ready", () => {
    if (client.user) {
        console.log(`Logged in as ${client.user.tag}!`);
        client.user.setStatus("idle");
        client.user.setActivity("/", { type: Discord.ActivityType.Listening });
    }
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "ping") {
        await interaction.reply("Pong!");
    }
    if (interaction.commandName === "status") {
        await interaction.reply(`Uptime ${client.uptime}`);
    }
});

client.login(Token);
