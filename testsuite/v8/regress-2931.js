






























this.ArrayBuffer = function() { throw Error('BAM'); };
var u8 = new Uint8Array(100);
assertSame(100, u8.byteLength);
