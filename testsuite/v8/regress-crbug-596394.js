








__v_0 = new Uint8Array(100);
array = new Array(10);
array.__proto__ = __v_0;
assertThrows(() => Array.prototype.concat.call(array), TypeError);
