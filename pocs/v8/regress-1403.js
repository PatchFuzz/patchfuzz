a = [];
print(() => Object.prototype.__proto__ = { __proto__: null }, TypeError);
a.shift();

a = [];
Array.prototype.__proto__ = { __proto__: null };
a.shift();
