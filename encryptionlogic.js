import crypto from 'crypto';

// Generate RSA key pair for a user
function generateRSAKeys() {
    return crypto.generateKeyPairSync('rsa', {
        modulusLength: 512,  // RSA key size // 512 is not secure, use 2048 or 4096
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    });
}

// Encrypt a message with the receiver's public key
function encryptMessage(message, publicKey) {
    const bufferMessage = Buffer.from(message, 'utf8');
    const encryptedData = crypto.publicEncrypt(publicKey, bufferMessage);
    return encryptedData.toString('base64');
}

// Decrypt a message with the receiver's private key
function decryptMessage(encryptedMessage, privateKey) {
    const bufferEncryptedMessage = Buffer.from(encryptedMessage, 'base64');
    const decryptedData = crypto.privateDecrypt(privateKey, bufferEncryptedMessage);
    return decryptedData.toString('utf8');
}

// Sign a message with the sender's private key
function signMessage(message, privateKey) {
    const sign = crypto.createSign('SHA256');
    sign.update(message);
    sign.end();
    const signature = sign.sign(privateKey, 'base64');
    return signature;
}

// Verify a message with the sender's public key
function verifySignature(message, signature, publicKey) {
    const verify = crypto.createVerify('SHA256');
    verify.update(message);
    verify.end();
    return verify.verify(publicKey, signature, 'base64');
}



// Generate keys for Alex (User 1) and Bob (User 2)
const alexKeys = generateRSAKeys();
const bobKeys = generateRSAKeys();

console.log("Alex's Public Key:\n", alexKeys.publicKey);
console.log("Alex's Private Key:\n", alexKeys.privateKey);
console.log("\nBob's Public Key:\n", bobKeys.publicKey);
console.log("Bob's Private Key:\n", bobKeys.privateKey);

// Alex (User 1) sends a message to Bob (User 2)
const messageToBob = "Hello, Bob!";

const encryptedMessageToBob = encryptMessage(messageToBob, bobKeys.publicKey);
console.log("\nEncrypted Message from Alex to Bob:\n", encryptedMessageToBob);

const decryptedMessageByBob = decryptMessage(encryptedMessageToBob, bobKeys.privateKey);
console.log("\nDecrypted Message by Bob:\n", decryptedMessageByBob);

// Alex (User 1) sends a message to himself
const messageToAlex = "Hello, Alex!";

const encryptedMessageToAlex = encryptMessage(messageToAlex, alexKeys.publicKey);
console.log("\nEncrypted Message from Alex to Himself:\n", encryptedMessageToAlex);

const decryptedMessageByAlex = decryptMessage(encryptedMessageToAlex, alexKeys.privateKey);
console.log("\nDecrypted Message by Alex:\n", decryptedMessageByAlex);

// Alex (User 1) signs a message
const sign = signMessage(messageToBob, alexKeys.privateKey);
console.log("\nSignature of Alex's Message to Bob:\n", sign);

// Bob (User 2) verifies Alex's message and signature
const isSignVerified = verifySignature(messageToBob, sign, alexKeys.publicKey);
console.log("\nIs signature verified?\n", isSignVerified);
console.log("\nIs signature verified?\n", isSignVerified ? "Yes" : "No");


