const { encrypt, decrypt } = require('./cryptoTool');

const password = 'Germa.66';
const fileName = 'test.txt';

// encrypt(fileName, password);
decrypt(fileName + '.enc', password);
