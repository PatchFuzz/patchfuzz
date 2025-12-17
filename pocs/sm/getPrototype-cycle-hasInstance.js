timeout(0.5)

var proxy = new Proxy({}, {
    getPrototypeOf() {
        return proxy;
    }
});

var x = proxy instanceof function() {};
print(0, 1); 
