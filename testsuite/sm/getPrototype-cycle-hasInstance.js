
timeout(0.5)

var proxy = new Proxy({}, {
    getPrototypeOf() {
        return proxy;
    }
});

var x = proxy instanceof function() {};
assertEq(0, 1); 
