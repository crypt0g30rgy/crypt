const CryptoJS = require('crypto-js');

/**
 * Encryption
 * AES
 */
function Encryption(number) {
    var key = CryptoJS.enc.Utf8.parse('12-your-key');
    var iv = CryptoJS.enc.Utf8.parse('12-your-iv');
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(number), key,
        {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return encrypted.toString();
}

// While using a file with data to be encoded
// const data = require('./payload.json');

// enter the data directly
const data = '{"hello":"world"}'; // Replace with your actual payload string

// when using json and need to make it to a string
// const encryptedResult = Encryption(JSON.stringify(data));

// When using raw data
const encryptedResult = Encryption(data);

console.log('Encrypted result:', encryptedResult);
