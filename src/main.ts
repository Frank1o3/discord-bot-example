
import { decrypt, numberToKey } from './utility.js';
import { readFileSync } from 'fs';

interface Data {
    KeyNum: number;
    Token: [string, string];
    AppID: [string, string];
}

const data: Data = JSON.parse(readFileSync("dist/Settings.json").toString());
const Key = numberToKey(data.KeyNum);
const Token = decrypt({ iv: data.Token[0], encryptedData: data.Token[1] }, Key);
const AppID = decrypt({ iv: data.AppID[0], encryptedData: data.AppID[1] }, Key);

console.log(`Token: ${Token}\nApp ID: ${AppID}`)