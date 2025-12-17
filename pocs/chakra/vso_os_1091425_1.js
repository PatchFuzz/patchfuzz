(function addAccessorPropertiesToGlobal() {
    var getter = function () { throw new Error("This getter should not get called"); };
    var setter = function () { throw new Error("This setter should not get called"); };

    Object.defineProperty(this, "foo", {
        get: getter,
        set: setter,
        configurable: true
    });

    Object.defineProperty(this, "bar", {
        get: getter,
        set: setter,
        configurable: true
    });

    Object.defineProperty(this, "nonConfigurableFoo", {
        get: getter,
        set: setter,
        configurable: false
    });

    Object.defineProperty(this, "nonConfigurableBar", {
        get: getter,
        set: setter,
        configurable: false
    });

    
    var d = Object.getOwnPropertyDescriptor(this, "foo");

    print(d, 'get', getter);
    print(d, 'set', setter);
    print(d, 'configurable', true);
    print(d, 'enumerable', false);
    print(d, 'writable');
    print(d, 'value');

    d = Object.getOwnPropertyDescriptor(this, "bar");

    print(d, 'get', getter);
    print(d, 'set', setter);
    print(d, 'configurable', true);
    print(d, 'enumerable', false);
    print(d, 'writable');
    print(d, 'value');

    var d = Object.getOwnPropertyDescriptor(this, "nonConfigurableFoo");

    print(d, 'get', getter);
    print(d, 'set', setter);
    print(d, 'configurable', false);
    print(d, 'enumerable', false);
    print(d, 'writable');
    print(d, 'value');

    var d = Object.getOwnPropertyDescriptor(this, "nonConfigurableBar");

    print(d, 'get', getter);
    print(d, 'set', setter);
    print(d, 'configurable', false);
    print(d, 'enumerable', false);
    print(d, 'writable');
    print(d, 'value');
}).call(this);
