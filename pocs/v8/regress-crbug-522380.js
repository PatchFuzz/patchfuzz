var global = this;
global.__defineSetter__('x', function(v) { x = v; });
print("global.x = 0", RangeError);
