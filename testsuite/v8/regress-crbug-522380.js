



var global = this;
global.__defineSetter__('x', function(v) { x = v; });
assertThrows("global.x = 0", RangeError);
