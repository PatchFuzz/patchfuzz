function print(b) {
    if (!b)
        throw new Error("bad assertion");
}

{
    print(Proxy.revocable.length === 2);
    print(Proxy.revocable.name === "revocable");

    {
        let threw = false;
        try {
            new Proxy.revocable;
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: function is not a constructor (evaluating 'new Proxy.revocable')");
        }
        print(threw);
    }

    {
        let threw = false;
        try {
            Proxy.revocable();
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: Proxy.revocable needs to be called with two arguments: the target and the handler");
        }
        print(threw);
    }

    {
        let threw = false;
        try {
            Proxy.revocable({});
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: Proxy.revocable needs to be called with two arguments: the target and the handler");
        }
        print(threw);
    }

    {
        let threw = false;
        try {
            Proxy.revocable({}, null);
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: A Proxy's 'handler' should be an Object");
        }
        print(threw);
    }

    {
        let threw = false;
        try {
            Proxy.revocable(null, {});
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: A Proxy's 'target' should be an Object");
        }
        print(threw);
    }

    {
        let threw = false;
        try {
            Proxy.revocable({}, {}, {}); 
        } catch(e) {
            threw = true;
        }
        print(!threw);
    }

    for (let i = 0; i < 500; i++) {
        let threw = false;
        try {
            let {revoke} =  Proxy.revocable({}, {}); 
            new revoke;
        } catch(e) {
            threw = true;
            print(e.toString() === "TypeError: function is not a constructor (evaluating 'new revoke')");
        }
        print(threw);
    }

    for (let i = 0; i < 500; i++) {
        function foo() {
            let threw = false;
            let {proxy, revoke} = Proxy.revocable({}, {});
            revoke();
            try {
                new Proxy(proxy, {});
            } catch(e) {
                threw = true;
            }
            print(!threw);
        }
        foo();
    }
}

function callAllHandlers(proxy) {
    Reflect.getPrototypeOf(proxy);
    Reflect.setPrototypeOf(proxy, null);
    Reflect.isExtensible(proxy);
    Reflect.preventExtensions(proxy);
    Reflect.getOwnPropertyDescriptor(proxy, "x")
    Reflect.has(proxy, "x")
    Reflect.get(proxy, "x")
    proxy["x"] = 20; 
    Reflect.deleteProperty(proxy, "x");
    Reflect.defineProperty(proxy, "x", {value: 40, enumerable: true, configurable: true});
    Reflect.ownKeys(proxy);
    Reflect.apply(proxy, this, []);
    Reflect.construct(proxy, []);
}

function shouldThrowNullHandler(f) {
    let threw = false;
    try {
        f();
    } catch(e) {
        threw = true;
        print(e.toString() === "TypeError: Proxy has already been revoked. No more operations are allowed to be performed on it");
    }
    print(threw);
}

function allHandlersShouldThrow(proxy) {
    shouldThrowNullHandler(() => Reflect.getPrototypeOf(proxy));
    shouldThrowNullHandler(() => Reflect.setPrototypeOf(proxy, null));
    shouldThrowNullHandler(() => Reflect.isExtensible(proxy));
    shouldThrowNullHandler(() => Reflect.preventExtensions(proxy));
    shouldThrowNullHandler(() => Reflect.getOwnPropertyDescriptor(proxy, "x"));
    shouldThrowNullHandler(() => Reflect.has(proxy, "x"));
    shouldThrowNullHandler(() => Reflect.get(proxy, "x"));
    shouldThrowNullHandler(() => proxy["x"] = 20); 
    shouldThrowNullHandler(() => Reflect.deleteProperty(proxy, "x"));
    shouldThrowNullHandler(() => Reflect.defineProperty(proxy, "x", {value: 40, enumerable: true, configurable: true}));
    shouldThrowNullHandler(() => Reflect.ownKeys(proxy));
    shouldThrowNullHandler(() => Reflect.apply(proxy, this, []));
    shouldThrowNullHandler(() => Reflect.construct(proxy, []));
}

const traps = [
    "getPrototypeOf",
    "setPrototypeOf",
    "isExtensible",
    "preventExtensions",
    "getOwnPropertyDescriptor",
    "has",
    "get",
    "set",
    "deleteProperty",
    "defineProperty",
    "ownKeys",
    "apply",
    "construct"
];

for (let i = 0; i < 500; i++) {
    let handler = {};
    let count = 0;
    let trapsCalled = new Set;
    for (let trap of traps) {
        let func;
        if (trap !== "set") {
            func = `(function ${trap}(...args) { count++; trapsCalled.add(${"'" + trap + "'"}); return Reflect.${trap}(...args); })`;
        } else {
            func = `(function ${trap}(proxy, prop, v) { trapsCalled.add(${"'" + trap + "'"}); count++; proxy[prop] = v; })`;
        }
        handler[trap] = eval(func);
    }


    let {proxy, revoke} = Proxy.revocable(function(){}, handler); 
    callAllHandlers(proxy);
    print(count >= traps.length);
    for (let trap of traps) {
        let result = trapsCalled.has(trap);
        print(result);
    }

    revoke();
    allHandlersShouldThrow(proxy);

    for (let i = 0; i < 50; i++)
        revoke(); 
}
