



var a = this;
var b = {};
a.length = 4294967296; 
assertThrows(() => Array.prototype.join.call(a,b), TypeError);
