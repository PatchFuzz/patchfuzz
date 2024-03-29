function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

function shouldThrow(func, errorMessage) {
    var errorThrown = false;
    var error = null;
    try {
        func();
    } catch (e) {
        errorThrown = true;
        error = e;
    }
    if (!errorThrown)
        throw new Error('not thrown');
    if (String(error) !== errorMessage)
        throw new Error(`bad error: ${String(error)}`);
}


shouldThrow(function () {
    'use strict';
    var target = {};
    var handler = {};
    var proxy = new Proxy(target, handler);
    shouldBe(Reflect.defineProperty(target, 'cocoa', {
        writable: false,
        value: 42,
    }), true);
    proxy.cocoa = 'NG';
}, `TypeError: Attempted to assign to readonly property.`);


(function () {
    'use strict';
    var target = {};
    var handler = {};
    var proxy = new Proxy(target, handler);
    shouldBe(Reflect.defineProperty(target, 'cocoa', {
        writable: false,
        value: 42,
    }), true);
    shouldBe(Reflect.set(proxy, 'cocoa', 'NG', 'Cocoa'), false);
}());


shouldThrow(function () {
    'use strict';
    var target = {};
    var proxy = new Proxy(target, {
        get set()
        {
            shouldBe(Reflect.defineProperty(receiver, 'cocoa', {
                set() { }
            }), true);
            return undefined;
        }
    });
    var receiver = { __proto__: proxy };
    shouldBe(Reflect.defineProperty(target, 'cocoa', {
        writable: true,
        value: 42,
    }), true);
    receiver.cocoa = 'NG';
}, `TypeError: Attempting to change value of a readonly property.`);


shouldThrow(function () {
    'use strict';
    var target = {};
    var proxy = new Proxy(target, {
        get set()
        {
            shouldBe(Reflect.defineProperty(receiver, 'cocoa', {
                value: 'hello',
                writable: false
            }), true);
            return undefined;
        }
    });
    var receiver = { __proto__: proxy };
    shouldBe(Reflect.defineProperty(target, 'cocoa', {
        writable: true,
        value: 42,
    }), true);
    receiver.cocoa = 'NG';
}, `TypeError: Attempting to change value of a readonly property.`);


shouldThrow(function () {
    'use strict';
    var target = {};
    var proxy = new Proxy(target, {});
    var receiver = { __proto__: proxy };
    shouldBe(Reflect.defineProperty(target, 'cocoa', {
        get() { }
    }), true);
    receiver.cocoa = 'NG';
}, `TypeError: Attempted to assign to readonly property.`);
