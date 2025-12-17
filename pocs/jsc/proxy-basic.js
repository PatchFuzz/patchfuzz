function print(b) {
    if (!b)
        throw new Error("Bad assertion");
}

print(Proxy instanceof Function);
print(Proxy.length === 2);
print(Proxy.prototype === undefined);

{
    for (let i = 0; i < 100; i++)
        print((new Proxy({}, {})).__proto__ === Object.prototype);
}

{
    for (let i = 0; i < 100; i++) {
        let threw = false;
        try {
            new Proxy({}, 20);
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: A Proxy's 'handler' should be an Object");
        }
        print(threw);
    }
}

{
    for (let i = 0; i < 100; i++) {
        let threw = false;
        try {
            new Proxy({}, "");
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: A Proxy's 'handler' should be an Object");
        }
        print(threw);
    }
}

{
    for (let i = 0; i < 100; i++) {
        let threw = false;
        try {
            new Proxy(20, {});
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: A Proxy's 'target' should be an Object");
        }
        print(threw);
    }
}

{
    for (let i = 0; i < 100; i++) {
        let threw = false;
        try {
            new Proxy("", {});
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: A Proxy's 'target' should be an Object");
        }
        print(threw);
    }
}

{
    
    for (let i = 0; i < 100; i++) {
        let threw = false;
        try {
            Proxy({}, {});
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: calling Proxy constructor without new is invalid");
        }
        print(threw === true);
    }

    let theTarget = {
        x: 30
    };

    let handler = {
        get: function(target, propName, proxyArg) {
            print(target === theTarget);
            print(proxyArg === proxy);
            if (propName === "y")
                return 45;
            print(propName === "x");
            return target[propName];
        }
    };

    let proxy = new Proxy(theTarget, handler);
    for (let i = 0; i < 1000; i++) {
        print(proxy.x === 30);
        print(proxy.y === 45);
        print(proxy["x"] === 30);
        print(proxy["y"] === 45);
    }

}

{
    let handler = {get: null};
    let target = {x: 20};
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            if (i % 2)
                proxy.foo;
            else
                proxy["foo"];
        } catch(e) {
            threw = true;
        }
        print(!threw);
    }
}

{
    let handler = {get: {}};
    let target = {x: 20};
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            if (i % 2)
                proxy.foo;
            else
                proxy["foo"];
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: 'get' property of a Proxy's handler should be callable");
        }
        print(threw);
    }
}

{
    let handler = {};
    let target = {x: 20};
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        print(proxy.x === 20);
        print(proxy.y === undefined);
    }
}

{
    let handler = {};
    let target = [1, 2, 3];
    let proxy = new Proxy(target, handler);
    for (let i = 0; i < 500; i++) {
        print(proxy[0] === 1);
        print(proxy[1] === 2);
        print(proxy[2] === 3);
    }
}

{
    let theTarget = [1, 2, 3];
    let handler = {
        get: function(target, propName, proxyArg) {
            switch (propName) {
            case "0":
            case "1":
                return 100;
            case "2":
            case "length":
                return target[propName];
            }
            print(false);
        }
    };
    let proxy = new Proxy(theTarget, handler);
    for (let i = 0; i < 500; i++) {
        print(proxy[0] === 100);
        print(proxy[1] === 100);
        print(proxy[2] === 3);
        print(proxy.length === 3);
        print(proxy["length"] === 3);
    }
}

{
    let wasCalled = false;
    let theTarget = {
        get x() {
            wasCalled = true;
            return 25;
        }
    };
    let j = 0;
    let handler = {
        get: function(target, propName, proxyArg) {
            print(target === theTarget);
            let x = j++;
            if (x % 2)
                return target[propName];
            else
                return "hello";
        }
    };

    let proxy = new Proxy(theTarget, handler);
    for (let i = 0; i < 500; i++) {
        if (i % 2)
            print(proxy.x === 25);
        else
            print(proxy.x === "hello");
            
    }

    print(wasCalled);
}

{
    let theTarget = {
        x: 40
    };
    let handler = {
        get: function(target, propName, proxyArg) {
            return 30;
        }
    };

    let proxy = new Proxy(theTarget, handler);
    for (let i = 0; i < 500; i++) {
        print(proxy.x === 30);
    }
    handler.get = undefined;
    for (let i = 0; i < 500; i++) {
        print(proxy.x === 40);
    }
}

{
    let error = null;
    let theTarget = new Proxy({}, {
        getOwnPropertyDescriptor: function(theTarget, propName) {
            error = new Error("hello!")
            throw error;
        }
    });

    let handler = {
        get: function(target, propName, proxyArg) {
            return 30;
        }
    };

    let proxy = new Proxy(theTarget, handler);
    for (let i = 0; i < 500; i++) {
        try {
            proxy.x;
        } catch(e) {
            print(e === error);
        }
    }
}

{
    let field = Symbol();
    let theTarget = {
        [field]: 40
    };
    let handler = {
        get: function(target, propName, proxyArg) {
            print(propName === field);
            return target[field];
        }
    };

    let proxy = new Proxy(theTarget, handler);
    for (let i = 0; i < 500; i++) {
        print(proxy[field] === 40);
    }
}

{
    let prop = Symbol();
    let theTarget = { };
    Object.defineProperty(theTarget, prop, {
        enumerable: true,
        configurable: true
    });
    let called = false;
    let handler = {
        getOwnPropertyDescriptor: function(target, propName) {
            print(prop === propName);
            called = true;
            return {
                enumerable: true,
                configurable: true
            };
        }
    };

    let proxy = new Proxy(theTarget, handler);
    for (let i = 0; i < 100; i++) {
        let pDesc = Object.getOwnPropertyDescriptor(proxy, prop);
        print(pDesc.configurable);
        print(pDesc.enumerable);
        print(called);
        called = false;
    }
}

{
    let prop = Symbol();
    let theTarget = { };
    Object.defineProperty(theTarget, prop, {
        enumerable: true,
        configurable: true
    });
    let called = false;
    let handler = {
        has: function(target, propName) {
            print(prop === propName);
            called = true;
            return true;
        }
    };

    let proxy = new Proxy(theTarget, handler);
    for (let i = 0; i < 100; i++) {
        let result = prop in proxy;
        print(result);
        print(called);
        called = false;
    }
}
