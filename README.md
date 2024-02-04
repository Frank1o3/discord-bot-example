# Bot v1 - Simple Discord Bot Example in TypeScript

Welcome this a simple example of creating a Discord bot using TypeScript and the discord.js library. This repository demonstrates the basic structure and functionality of a Discord bot, including command handling, encryption, and utility functions.

## Overview

The bot is structured around several core files:

- `main.ts`: The entry point of the bot, responsible for initializing the Discord client, registering commands, and handling interactions.
- `generate.ts`: A script to generate encrypted configuration files containing sensitive information such as the bot token and application ID.
- `utility.ts`: Contains utility functions for encryption and decryption, as well as converting numbers to keys.
- `config.ts`: Defines the bot's intents and commands.

## npm Scripts

This repository includes custom npm scripts for various tasks:

- `npm run Build`: Compiles the TypeScript source files into JavaScript using the TypeScript compiler (`tsc`). This step is necessary to prepare the bot for execution by translating the TypeScript (`main.ts`) into JavaScript (`main.js`).
- `npm run Run <mode>`: Starts the bot by executing the `Run.sh` script. The script accepts a single argument to determine the execution mode:
  - If the argument is `0`, it runs the compiled `main.js` using Node.js.
  - If the argument is `1`, it runs the compiled `main.js` using Nodemon for development, allowing for automatic restarts upon file changes.

- `npm run Generate`: Executes the `generate.ts` script to create encrypted configuration files. You will be prompted to enter your Discord bot token and application ID during this process.

## Getting Started

To get started with this bot, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Generate the encrypted configuration files by running `npm run Generate`. You will be prompted to enter your Discord bot token and application ID.
4. Build the TypeScript files by running `npm run Build`. This compiles the TypeScript code into JavaScript, producing a `main.js` file.
5. Start the bot by running `npm run Run 0` for a standard execution or `npm run Run 1` for development mode with Nodemon.

## Usage

Once the bot is running, you can interact with it using the following commands:

- `/ping`: Replies with "Pong!"
- `/status`: Displays the bot's uptime.

These commands are defined in the `config.ts` file and registered in the `main.ts` file.

## Customization

You can customize the bot's behavior by modifying the `config.ts` file. Add or remove commands by editing the `Commands` array.

## Security

The bot uses encryption to securely store sensitive information such as the bot token and application ID. These values are encrypted using the `utility.ts` module and stored in the `dist/data.json` file.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues if you find bugs or have suggestions for improvements.

## License

This project is licensed under the GNU License. See the `LICENSE` file for details.