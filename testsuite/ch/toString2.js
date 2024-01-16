




function write(v) { WScript.Echo(v); }

Object.prototype.toString = function() { return "toString() Overwritten"; }

var o = new Object();





write(o);
