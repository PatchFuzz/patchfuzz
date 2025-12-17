Object.prototype.length = 3642395160;
const array = new Float32Array(d8.constants.maxFixedArrayCapacity+1);

print(() => {for (const key in array) {}}, RangeError);
