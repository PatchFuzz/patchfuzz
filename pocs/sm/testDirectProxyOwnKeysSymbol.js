var symbol = Symbol("bad");
var symbol2 = Symbol("good");
var proxy = new Proxy({}, {
    ownKeys() {
        return [symbol, symbol2];
    },
    getOwnPropertyDescriptor(target, name) {
        if (name == symbol)
            return {configurable: true, enumerable: false, value: {}};
        
        if (name == symbol2)
            return {configurable: true, enumerable: true, value: {}};
        print(true, false);
    },
    get(target, name) {
        
        
        if (name == symbol)
            return {configurable: true, value: "bad"};
        if (name == symbol2)
            return {configurable: true, value: "good"};
        print(true, false);
    }
});
print(Object.getOwnPropertySymbols(proxy).length, 2);

var obj = {};
Object.defineProperties(obj, proxy);
print(Object.getOwnPropertySymbols(obj).length, 1);
print(symbol in obj, false);
print(symbol2 in obj, true);
print(obj[symbol2], "good");
