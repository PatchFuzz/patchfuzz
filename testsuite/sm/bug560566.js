


var o = {}
Object.defineProperty(o, "x", {get: undefined, set: function() { Object.defineProperty(o, "x", {set: function() { }}); }, configurable: true});
o.a = 0;
o.x = 0;
