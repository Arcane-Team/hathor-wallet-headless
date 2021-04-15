import crypto from 'crypto';

function decode(token) {
  const algorithm = 'aes-192-cbc';
  const key = crypto.createHash("sha256").update(process.env.SECURE_STORAGE_KEY).digest().slice(0, 24);

  try {
    const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from('passwordpassword'));
    let decryptedString = decipher.update(token, 'hex', 'utf8');
    const finalCharacter = decipher.final('utf8');

    finalCharacter ? decryptedString += finalCharacter : null;

    return decryptedString;
  } catch {
    return null;
  }
}

module.exports = {
  decode
}