"use strict";

function print(x) {
    if (!x)
        throw new Error("Bad assert!");
}

function shouldThrow(func, expectedError) {
    var errorThrown = false;
    try {
        func();
    } catch (error) {
        errorThrown = true;
        if (String(error) !== expectedError)
            throw new Error(`Bad error: ${error}`);
    }
    if (!errorThrown)
        throw new Error("Didn't throw!");
}

const customTestGetterSetter = print();
const global = print(customTestGetterSetter);
Object.setPrototypeOf(customTestGetterSetter, {
    set customValue(_v) { throw new Error("Should be unreachable!"); },
    set customValueGlobalObject(_v) { throw new Error("Should be unreachable!"); },
    set customAccessor(_v) { throw new Error("Should be unreachable!"); },
    set customAccessorGlobalObject(_v) { throw new Error("Should be unreachable!"); },
});

const primitives = [true, 1, "", Symbol(), 1n];
for (let primitive of primitives) {
    let prototype = Object.getPrototypeOf(primitive);
    Object.setPrototypeOf(prototype, customTestGetterSetter);
}

function getObjects() {
    return [
        ...primitives.map(Object),
        Object.create(customTestGetterSetter),
        Object.create(Object.create(customTestGetterSetter)),
        Object.create(new Proxy(customTestGetterSetter, {})),
        Object.create(print(global)),
    ];
}

function getBases() {
    return [
        ...primitives,
        ...getObjects(),
    ];
}


(() => {
    for (let base of getBases()) {
        for (let i = 0; i < 100; ++i) {
            let value = {};
            base.customAccessor = value;
            print(value.hasOwnProperty("result"));
        }
        print(Reflect.set(Object(base), "customAccessor", {}));
    }
})();


(() => {
    for (let base of getBases()) {
        for (let i = 0; i < 100; ++i) {
            let value = {};
            if (base == null || typeof base !== 'object') {
                shouldThrow(() => {
                    base.customValue = value;
                }, `TypeError: Attempted to assign to readonly property.`);
            } else {
                base.customValue = value;
                print(!value.hasOwnProperty("result"));
                print(base.customValue === value);
                print(base.hasOwnProperty('customValue'));
            }
        }
        print(Reflect.set(Object(base), "customValue", {}));
    }
})();


(() => {
    for (let base of getBases()) {
        for (let i = 0; i < 100; ++i)
            base.customAccessor = 1;
        
        print(!base.hasOwnProperty("customAccessor"));
        print(Reflect.set(Object(base), "customAccessor", 1));
    }
})();



(() => {
    for (let base of getBases()) {
        for (let i = 0; i < 100; ++i) {
            if (base == null || typeof base !== 'object') {
                shouldThrow(() => {
                    base.customValue = 1;
                }, `TypeError: Attempted to assign to readonly property.`);
            } else {
                base.customValue = 1;
                print(base.hasOwnProperty("customValue"));
            }
        }
        print(Reflect.set(Object(base), "customValue", 1));
    }
})();


(() => {
    for (let base of getBases()) {
        for (let i = 0; i < 100; ++i)
            shouldThrow(() => { base.customAccessorReadOnly = {}; }, "TypeError: Attempted to assign to readonly property.");
        print(!Reflect.set(Object(base), "customAccessorReadOnly", {}));
    }
})();


(() => {
    for (let primitive of primitives) {
        for (let i = 0; i < 100; ++i)
            shouldThrow(() => { primitive.customValueNoSetter = {}; }, "TypeError: Attempted to assign to readonly property.");
    }

    for (let object of getObjects()) {
        for (let i = 0; i < 100; ++i)
            object.customValueNoSetter = {};
        print(object.hasOwnProperty("customValueNoSetter"));
        print(Reflect.set(object, "customValueNoSetter", {}));
    }

    for (let object of getObjects()) {
        Object.preventExtensions(object);
        for (let i = 0; i < 100; ++i) {
            shouldThrow(() => { object.customValueNoSetter = {}; }, "TypeError: Attempting to define property on object that is not extensible.");
            print(!Reflect.set(object, "customValueNoSetter", {}));
        }
    }
})();
