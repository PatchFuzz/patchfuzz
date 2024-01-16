













var symbol = Symbol("s");
var obj = {demo: "3"};
obj[symbol] = 3;

var proxy = new Proxy(obj, []);
var str = JSON.stringify(proxy);

assert(str === '{"demo":"3"}');
