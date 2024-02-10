import { randomBytes, createDecipheriv, createCipheriv } from 'crypto';

interface DataType {
    iv: string,
    encryptedData: string
}

export function numberToKey(num: number) {
    const str = num.toString();
    const paddedStr = str.padEnd(32, '0');
    const key = Buffer.from(paddedStr, 'utf8');
    return key;
}

export function encrypt(text: string, key: Buffer) {
    const algorithm = 'aes-256-cbc';
    const iv = randomBytes(16);
    const cipher = createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

export function decrypt(data: DataType, key: Buffer) {
    const algorithm = 'aes-256-cbc';
    const iv = Buffer.from(data.iv, 'hex');
    const encryptedText = Buffer.from(data.encryptedData, 'hex');
    const decipher = createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}