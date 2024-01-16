





var v = [];
v.__proto__ = function() {};
v.prototype;

var v = [];
v.__proto__ = new Error();
v.stack;
