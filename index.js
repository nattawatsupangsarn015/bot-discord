require("dotenv").config();

const Discord = require("discord.js");
const botRem = new Discord.Client();

botRem.on("ready", () => {
  console.log("Bot ready to use!");
});

botRem.on("message", (message) => {
  console.log("message: ", message);
  if (message.content === "test bot") {
    message.reply("hello world!");
  }
});

botRem.login(process.env.bot_token);
