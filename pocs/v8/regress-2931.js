this.ArrayBuffer = function() { throw Error('BAM'); };
var u8 = new Uint8Array(100);
print(100, u8.byteLength);
