const manyAs = 'A'.repeat(0x10000);
const manyas = manyAs.toLowerCase();
const re = RegExp('^(?:' + manyas + '|' + manyAs + '|' + manyAs + ')$', 'i');


print(() => manyas.replace(re, manyAs));
