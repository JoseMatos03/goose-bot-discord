import DiscordJS, { Intents, Message } from "discord.js";
import WOKCommands from "wokcommands";
import path from "path";

import dotenv from "dotenv";
dotenv.config();

const client = new DiscordJS.Client({
  // tells discord what the bot INTENTS to use and what information it needs
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("The bot is ready");

  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    typeScript: true,
    testServers: ["849979763590430750"],
  });
});

client.login(process.env.TOKEN);
