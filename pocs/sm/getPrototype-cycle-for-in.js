timeout(0.5);

var proxy = new Proxy({}, {
    getPrototypeOf() {
        return proxy;
    }
});

var obj = {a: 1, b: 2, __proto__: proxy};
for (var x in obj) {}
print(0, 1); 
