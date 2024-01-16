




var a = [];
for (var i = 0; i < 200; ++i) a.push({});
var p = new Proxy({}, {preventExtensions() { return false; }});
Object.preventExtensions(p);
