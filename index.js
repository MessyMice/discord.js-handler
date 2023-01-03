/* Packages */
const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");
const chalk = require("chalk");
const gradient = require("gradient-string");
const fs = require("fs");
const path = require("node:path");

/* Setting up Client */
const client = new Client({ intents: 32767 });

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // Set a new item in the Collection with the key as the command name and the value as the exported module
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      chalk.red(
        `[WARNING] The command at ${filePath} is missing a require "data" or "execute" property.`
      )
    );
  }
}

/* Accessing Client */
client.login(process.env.TOKEN);

/* Express */
const express = require("express");
const port = "3000";
const app = express();
const server = require("http").createServer(app);
app.use(express.static(path.join(__dirname + "/public")));
server.listen(port);