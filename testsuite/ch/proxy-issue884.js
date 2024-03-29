




var proxyHandler = {
    has(t, p) { WScript.Echo("has " + p); return true; }
};
var p = new Proxy({}, proxyHandler);
var obj = {};

try {
    Object.defineProperty(obj, "x", p);
} catch (e) {
    if (e instanceof TypeError) {
        if (e.message !== "Invalid property descriptor: cannot both specify accessors and a 'value' attribute") {
            print('FAIL');
        } else {
            print('PASS');
        }
    } else {
        print('FAIL');
    }
}
