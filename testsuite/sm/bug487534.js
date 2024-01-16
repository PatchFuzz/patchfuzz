


var fs = { x: /a/, y: /a/, z: /a/ };
for (var p in fs) { this[fs[p]] = null; }
