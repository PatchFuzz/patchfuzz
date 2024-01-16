


load(libdir + 'asserts.js');

assertThrowsInstanceOf(() => {function f([x]){}f(DataView.prototype)}, TypeError);
