



Object.prototype.length = 3642395160;
const array = new Float32Array(2**27);

assertThrows(() => {for (const key in array) {}}, RangeError);
