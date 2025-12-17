var ta = new Uint32Array(10);


Object.defineProperty(ta, "length", {value: 0x1000});


Array.prototype.fill.call(ta, 0);
