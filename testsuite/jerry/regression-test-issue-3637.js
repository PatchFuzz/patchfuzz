













var a = [1, 2, 3, 4];
var b = a.slice(0, { valueOf: function(){ a.length = 0; return 100; } });

assert(b.length === 4);

var c = [1, 2, 3, 4];
c.prop = 4
var d = c.slice(0, { valueOf: function(){ c.length = 0; return 100; } });

assert(d.length === 4);
