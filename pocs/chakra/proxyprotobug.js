var proxyHandler = {
    has(p, n) {
        print("has " + n);
        return !(n === "get" || n === "set");
    },
    get(p, n) {
        print("get " + n);
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

print("======================");

var pp = {};
pp.__proto__ = p;
Object.defineProperty(o, "y", pp);
