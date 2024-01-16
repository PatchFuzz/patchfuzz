



var o = Object.preventExtensions(new ArrayBuffer);
try { (function () { o.__proto__ = ({ __proto__: o, indexArray: ["abc"] }); })(); } catch(exc) {}
JSON.stringify(this);
