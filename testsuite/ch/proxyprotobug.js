




var proxyHandler = {
    has(p, n) {
        WScript.Echo("has " + n);
        return !(n === "get" || n === "set");
    },
    get(p, n) {
        WScript.Echo("get " + n);
        if (n == "get" || n == "set") {
            return () => 1;
        } else {
            return 1;
        }
    }
};

var p = new Proxy({}, proxyHandler);
var o = {};
Object.defineProperty(o, "x", p);

WScript.Echo("======================");

var pp = {};
pp.__proto__ = p;
Object.defineProperty(o, "y", pp);
