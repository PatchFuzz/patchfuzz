const bodyLength = 32768;
const body = 'a'.repeat(bodyLength);
const regex = new RegExp(`(?<=(?:${body})*)b`);
print(() => regex.exec());
