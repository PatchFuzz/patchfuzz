function print(b) {
    if (!b)
        throw new Error("bad assertion");
}

{
    let target = {x: 20};
    let called = false;
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            called = true;
            print(theTarget === target);
            print(propName === "x");
            return undefined;
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        print(Object.getOwnPropertyDescriptor(proxy, "x") === undefined);
        print(called);
        called = false;
    }
}

{
    let target = {};
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            return 25;
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            Object.getOwnPropertyDescriptor(proxy, "x");
        } catch(e) {
            print(e.toString() === "TypeError: result of 'getOwnPropertyDescriptor' call should either be an Object or undefined");
            threw = true;
        }
        print(threw);
    }
}

{
    let target = {};
    Object.defineProperty(target, "x", {
        enumerable: true,
        configurable: false
    });
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            print(theTarget === target);
            print(propName === "x");
            return undefined;
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            Object.getOwnPropertyDescriptor(proxy, "x");
        } catch(e) {
            print(e.toString() === "TypeError: When the result of 'getOwnPropertyDescriptor' is undefined the target must be configurable");
            threw = true;
        }
        print(threw);
    }
}

{
    let target = Object.preventExtensions({x: 1});
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            print(theTarget === target);
            print(propName === "x");
            return undefined;
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            Object.getOwnPropertyDescriptor(proxy, "x");
        } catch(e) {
            print(e.toString() === "TypeError: When 'getOwnPropertyDescriptor' returns undefined, the 'target' of a Proxy should be extensible");
            threw = true;
        }
        print(threw);
    }
}

{
    let isExtensibleTrapCalls = 0;
    let target = new Proxy({x: 1}, {
        isExtensible: function() {
            isExtensibleTrapCalls++;
            return true;
        }
    });

    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            print(theTarget === target);
            print(propName === "x");
            return undefined;
        }
    };

    let proxy = new Proxy(target, handler);
    for (let i = 1; i <= 500; i++) {
        print(Object.getOwnPropertyDescriptor(proxy, "x") === undefined);
        print(isExtensibleTrapCalls === i);
    }
}

{
    let target = {};
    Object.defineProperty(target, "x", {
        enumerable: true,
        configurable: true
    });
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            print(theTarget === target);
            print(propName === "x");
            return {configurable: false};
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            Object.getOwnPropertyDescriptor(proxy, "x");
        } catch(e) {
            print(e.toString() === "TypeError: Result from 'getOwnPropertyDescriptor' can't be non-configurable when the 'target' doesn't have it as an own property or if it is a configurable own property on 'target'");
            threw = true;
        }
        print(threw);
    }
}

{
    let target = {};
    Object.defineProperty(target, "x", {
        enumerable: false,
        configurable: false
    });
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            print(theTarget === target);
            print(propName === "x");
            return {enumerable: true};
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            Object.getOwnPropertyDescriptor(proxy, "x");
        } catch(e) {
            print(e.toString() === "TypeError: Result from 'getOwnPropertyDescriptor' fails the IsCompatiblePropertyDescriptor test");
            threw = true;
        }
        print(threw);
    }
}

{
    let target = {};
    let handler = {
        getOwnPropertyDescriptor: 45
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            Object.getOwnPropertyDescriptor(proxy, "x");
        } catch(e) {
            print(e.toString() === "TypeError: 'getOwnPropertyDescriptor' property of a Proxy's handler should be callable");
            threw = true;
        }
        print(threw);
    }
}

{
    let target = {};
    let handler = {
        getOwnPropertyDescriptor: null
    };
    Object.defineProperty(target, "x", {
        enumerable: true,
        configurable: false
    });
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let pDesc = Object.getOwnPropertyDescriptor(proxy, "x");
        print(pDesc.configurable === false);
        print(pDesc.enumerable === true);
    }
}

{
    let target = {};
    let handler = {
        getOwnPropertyDescriptor: undefined
    };
    Object.defineProperty(target, "x", {
        enumerable: true,
        configurable: false
    });
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let pDesc = Object.getOwnPropertyDescriptor(proxy, "x");
        print(pDesc.configurable === false);
        print(pDesc.enumerable === true);
    }
}

{
    let target = {};
    let handler = { };
    Object.defineProperty(target, "x", {
        enumerable: true,
        configurable: false
    });
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let pDesc = Object.getOwnPropertyDescriptor(proxy, "x");
        print(pDesc.configurable === false);
        print(pDesc.enumerable === true);
    }
}

{
    let target = {};
    let error = null;
    let handler = { get getOwnPropertyDescriptor() {
        error = new Error("blah");
        throw error;
    }};
    Object.defineProperty(target, "x", {
        enumerable: true,
        configurable: false
    });
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            let pDesc = Object.getOwnPropertyDescriptor(proxy, "x");
        } catch(e) {
            threw = true;
            print(e === error);
        }
        print(threw);
    }
}



Object.prototype.fooBarBaz = 20; 

{
    let target = {};
    let called = false;
    let handler = {
        getOwnPropertyDescriptor: function() {
            called = true;
            return undefined;
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 1000; i++) {
        let set = new Set();
        for (let p in proxy) {
            set.add(p);
        }
        print(set.has("fooBarBaz"));
        print(called);
        called = false;
    }
}

{
    let target = {};
    let called = false;
    let handler = {
        getOwnPropertyDescriptor: function() {
            called = true;
            return undefined;
        }
    };

    let proxy = new Proxy(target, handler);
    let proxyish = Object.create(proxy, {
        x: {value: 20, enumerable: true},
        y: {value: 20, enumerable: true}
    });
    for (let i = 0; i < 1000; i++) {
        let set = new Set;
        for (let p in proxyish) {
            set.add(p);
        }
        print(set.has("x"));
        print(set.has("y"));
        print(set.has("fooBarBaz"));
        print(called);
        called = false;
    }
}

{
    let target = {};
    Object.defineProperty(target, "x", {
        enumerable: false,
        configurable: false,
        writable: true,
        value: 50
    });
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            return {enumerable: false, value: 45};
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            Object.getOwnPropertyDescriptor(proxy, "x");
        } catch(e) {
            print(e.toString() === "TypeError: Result from 'getOwnPropertyDescriptor' can't be non-configurable and non-writable when the target's property is writable");
            threw = true;
        }
        print(threw);
    }
}

{
    let target = {};
    Object.defineProperty(target, "x", {
        enumerable: true,
        configurable: true,
        writable: true
    });
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            return {configurable: true, value: 45, enumerable: true};
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let desc = Object.getOwnPropertyDescriptor(proxy, "x");
        print(desc.configurable === true);
        print(desc.enumerable === true);
        print(desc.writable === false);
        print(desc.value === 45);
    }
}

{
    let target = {};
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            return {configurable: true, value: 45, enumerable: true};
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let desc = Object.getOwnPropertyDescriptor(proxy, "x");
        print(desc.configurable === true);
        print(desc.enumerable === true);
        print(desc.writable === false);
        print(desc.value === 45);
    }
}

{
    let target = {};
    Object.defineProperty(target, "x", {
        get: function() { return 25; },
        set: function() { return 50; },
        configurable: false
    });
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            return {configurable: false, set:function(){}, get:function(){} };
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            Object.getOwnPropertyDescriptor(proxy, "x");
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: Result from 'getOwnPropertyDescriptor' fails the IsCompatiblePropertyDescriptor test");
        }
        print(threw);
    }
}

{
    let target = {};
    Object.defineProperty(target, "x", {
        get: function() { return 25; },
        set: function() { return 50; },
        configurable: true
    });
    let a = function() { };
    let b = function() {}
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            return {configurable: true, set: a, get: b };
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let result = Object.getOwnPropertyDescriptor(proxy, "x");
        print(result.configurable);
        print(result.set === a);
        print(result.get === b);
    }
}

{
    let target = {};
    Object.defineProperty(target, "x", {
        get: function() { return 25; },
        set: function() { return 50; },
        configurable: false
    });
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            return {configurable: false, set:function(){}, get:function(){} };
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            Object.getOwnPropertyDescriptor(proxy, "x");
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: Result from 'getOwnPropertyDescriptor' fails the IsCompatiblePropertyDescriptor test");
        }
        print(threw);
    }
}

{
    let target = {};
    let setter = function() { };
    let getter = function() { };
    Object.defineProperty(target, "x", {
        get: getter,
        set: setter,
        configurable: false
    });
    let handler = {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            return {
                configurable: false, 
                set: setter, 
                get: getter
            };
        }
    };
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let desc = Object.getOwnPropertyDescriptor(proxy, "x");
        print(desc.configurable === false);
        print(desc.get === getter);
        print(desc.set === setter);
        print(desc.enumerable === false);
        print(desc.writable === undefined);
    }
}
