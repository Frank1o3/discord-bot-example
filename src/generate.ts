import { createInterface } from 'readline';
import { writeFileSync } from 'fs';
import { encrypt, numberToKey } from './utility.js';

const KeyNum = Math.floor(Math.random() * 10000);

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

async function askQuestions() {
    const token = await new Promise<string>(resolve => {
        rl.question('Please enter Your Discord Bot Token: ', resolve);
    });
    const appId = await new Promise<string>(resolve => {
        rl.question('Please enter Your Discord Bot Application ID: ', resolve);
    });
    console.log(`You entered: ${appId}`);
    const a = encrypt(token, numberToKey(KeyNum));
    const b = encrypt(appId, numberToKey(KeyNum));
    const data = {
        KeyNum: KeyNum,
        Token: [a.iv, a.encryptedData],
        AppID: [b.iv, b.encryptedData]
    };
    try {
        console.log("Making Encrypted Json file");
        writeFileSync('dist/Settings.json', JSON.stringify(data, null, 2));
        console.log('JSON file has been saved.');
    } catch (error) {
        console.error('Error writing JSON file:', error);
    } finally {
        rl.close();
    }
}

askQuestions().catch(console.error);