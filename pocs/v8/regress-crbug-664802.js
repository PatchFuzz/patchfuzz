var o = {};
o.__proto__ = new Proxy({}, {});

var m = new Map();
m.set({});
m.set(o);
