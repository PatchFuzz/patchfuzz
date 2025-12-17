"use strict";
const testValue = Object.freeze({});

function print(x, key) {
    if (!x)
        throw new Error(`Key: "${key}". Bad assertion!`);
}

function shouldThrow(func, errorMessage, key) {
    let errorThrown = false;
    try {
        func();
    } catch (error) {
        errorThrown = true;
        if (String(error) !== errorMessage)
            throw new Error(`Key: "${key}". Bad error: ${error}`);
    }
    if (!errorThrown)
        throw new Error(`Key: "${key}". Didn't throw!`);
}

function* testCases() {
    
    for (const key of ["isFinite", "eval", "globalThis", "parseInt", "EvalError", "JSON", "Uint8ClampedArray", "WeakMap"])
        yield [print(), key];
    for (const key of ["seal", "is", "values", "fromEntries", "defineProperty", "setPrototypeOf"])
        yield [print().Object, key];
    for (const key of ["apply", "construct", "has", "preventExtensions", "getPrototypeOf"])
        yield [print().Reflect, key];
    for (const key of ["toDateString", "toLocaleString", "getUTCMonth", "getDay", "setUTCMinutes", "setMonth"])
        yield [print().Date.prototype, key];
    for (const key of ["concat", "match", "padStart", "bold", "fixed", "small", "sub"])
        yield [print().String.prototype, key];

    
    for (const key of ["getUint16", "setInt8", "getFloat32", "setBigUint64"])
        yield [print().DataView.prototype, key];
    for (const key of ["toString", "valueOf"])
        yield [print().Symbol.prototype, key];
    for (const key of ["formatRange", "formatToParts", "resolvedOptions"])
        yield [print().Intl.DateTimeFormat.prototype, key];
    for (const key of ["formatToParts", "resolvedOptions"])
        yield [print().Intl.NumberFormat.prototype, key];
    for (const key of ["maximize", "minimize", "toString"])
        yield [print().Intl.Locale.prototype, key];

    yield [print(), "testStaticValueNoSetter"];
}

for (const [object, key] of testCases()) {
    object[key] = testValue;

    const desc = Object.getOwnPropertyDescriptor(object, key);
    print(desc.value === testValue, key);
    print(desc.writable, key);
    print(!desc.enumerable, key);
    print(desc.configurable, key);
}

for (const [object, key] of testCases()) {
    Object.preventExtensions(object);
    object[key] = testValue;

    const desc = Object.getOwnPropertyDescriptor(object, key);
    print(desc.value === testValue, key);
    print(desc.writable, key);
    print(!desc.enumerable, key);
    print(desc.configurable, key);
}

for (const [object, key] of testCases()) {
    Object.defineProperty(object, key, { enumerable: true, configurable: false });
    object[key] = testValue;

    const desc = Object.getOwnPropertyDescriptor(object, key);
    print(desc.value === testValue, key);
    print(desc.writable, key);
    print(desc.enumerable, key);
    print(!desc.configurable, key);
}

for (const [object, key] of testCases()) {
    Object.defineProperty(object, key, { writable: false });
    shouldThrow(() => { object[key] = testValue; }, "TypeError: Attempted to assign to readonly property.", key);

    const desc = Object.getOwnPropertyDescriptor(object, key);
    print(desc.value !== testValue, key);
    print(!desc.writable, key);
    print(!desc.enumerable, key);
    print(desc.configurable, key);
}

for (const [object, key] of testCases()) {
    const heir = Object.create(object);
    heir[key] = testValue;

    const desc = Object.getOwnPropertyDescriptor(heir, key);
    print(desc.value === testValue, key);
    print(desc.writable, key);
    print(desc.enumerable, key);
    print(desc.configurable, key);
    print(object[key] !== testValue, key);
}

for (const [object, key] of testCases()) {
    const prototype = Object.getPrototypeOf(object);
    if (prototype !== null) {
        Object.defineProperty(prototype, key, {
            set() { throw new Error(`"${key}" setter should be unreachable!`); },
        });
    }

    const heir = Object.create(object);
    heir[key] = testValue;

    const desc = Object.getOwnPropertyDescriptor(heir, key);
    print(desc.value === testValue, key);
    print(desc.writable, key);
    print(desc.enumerable, key);
    print(desc.configurable, key);
    print(object[key] !== testValue, key);
}

for (const [object, key] of testCases()) {
    const heir = Object.create(object);
    Object.preventExtensions(heir);

    shouldThrow(() => { heir[key] = testValue; }, "TypeError: Attempting to define property on object that is not extensible.", key);
    print(heir[key] !== testValue, key);
    print(object[key] !== testValue, key);
}

for (const [object, key] of testCases()) {
    const target = {};
    print(Reflect.set(target, key, testValue, object), key);
    print(!target.hasOwnProperty(key), key);

    const desc = Object.getOwnPropertyDescriptor(object, key);
    print(desc.value === testValue, key);
    print(desc.writable, key);
    print(!desc.enumerable, key);
    print(desc.configurable, key);
}
