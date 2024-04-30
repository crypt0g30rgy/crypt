const CryptoJS = require('crypto-js');

/**
 * Decryption PDF
 */
function Decryption(encryptedText) {
    const key = CryptoJS.enc.Utf8.parse('12-your-key');
    const iv = CryptoJS.enc.Utf8.parse('12-your-iv');
    const encryptedBytes = CryptoJS.enc.Base64.parse(encryptedText);
    const cipher = CryptoJS.AES.decrypt(
        { ciphertext: encryptedBytes },
        key,
        {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }
    );
    const decryptedBytes = cipher.toString(CryptoJS.enc.Utf8);
    return decryptedBytes
}

// const encryptedResult = require('./encryptedResult');

// Usage:
const encryptedResult = '';
const decryptedResult = Decryption(encryptedResult);
console.log('Decrypted result:', decryptedResult);
