






var sab = new SharedArrayBuffer(4);

var x = new Int32Array(sab);
x.__proto__ = (function(){});
new Uint8Array(x);		



var x = new Int32Array(sab);
Object.defineProperty(x, "length", { value: 0 });
new Uint8Array(x);		



var x = new Int32Array(sab);
Object.defineProperty(x, "length", { value: 1 << 20 });
new Uint8Array(x);
