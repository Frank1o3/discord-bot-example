# Bot v1 - Simple Discord Bot Example in TypeScript

Welcome to Bot v1, a simple example of creating a Discord bot using TypeScript and the discord.js library. This repository demonstrates the basic structure and functionality of a Discord bot, including command handling, encryption, and utility functions.

## Overview

The bot is structured around several core files:

- `main.ts`: The entry point of the bot, responsible for initializing the Discord client, registering commands, and handling interactions.
- `generate.ts`: A script to generate encrypted configuration files containing sensitive information such as the bot token and application ID.
- `utility.ts`: Contains utility functions for encryption and decryption, as well as converting numbers to keys.
- `config.ts`: Defines the bot's intents and commands.

## npm Scripts

This repository includes custom npm scripts for various tasks:

- `npm run Run`: Starts the bot by executing the `Run.sh` script, which compiles the TypeScript files and runs the bot.
- `npm run Build`: Compiles the TypeScript source files into JavaScript using the TypeScript compiler (`tsc`).
- `npm run Generate`: Executes the `generate.ts` script to create encrypted configuration files.

## Getting Started

To get started with this bot, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Generate the encrypted configuration files by running `npm run Generate`. You will be prompted to enter your Discord bot token and application ID.
4. Build the TypeScript files by running `npm run Build`.
5. Start the bot by running `npm run Run`.

## Usage

Once the bot is running, you can interact with it using the following commands:

- `/ping`: Replies with "Pong!"
- `/status`: Displays the bot's uptime.

These commands are defined in the `config.ts` file and registered in the `main.ts` file.

## Customization

You can customize the bot's behavior by modifying the `config.ts` file. Add or remove commands by editing the `Commands` array.

## Security

The bot uses encryption to securely store sensitive information such as the bot token and application ID. These values are encrypted using the `utility.ts` module and stored in the `dist/Settings.json` file.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues if you find bugs or have suggestions for improvements.

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.