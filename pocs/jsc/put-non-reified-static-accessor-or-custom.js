"use strict";
const testValue = Object.freeze({});

function print(x, key) {
    if (!x)
        throw new Error(`Key: "${key}". Bad assertion!`);
}

function* testCases() {
    for (const key of ["description"])
        yield [print().Symbol.prototype, key];
    for (const key of ["buffer", "byteLength", "byteOffset"])
        yield [print().DataView.prototype, key];
    for (const key of ["baseName", "caseFirst", "hourCycle", "numeric", "region"])
        yield [print().Intl.Locale.prototype, key];

    for (const key of ["testStaticAccessorDontEnum", "testStaticAccessorReadOnly"])
        yield [print(), key];
    yield [print(), "testStaticValueReadOnly"];
}

for (const [object, key] of testCases()) {
    const target = {};
    print(!Reflect.set(target, key, testValue, object), key);
    print(!target.hasOwnProperty(key), key);
    print(Object.getOwnPropertyDescriptor(object, key).value !== testValue, key);
}

for (const [object, key] of testCases()) {
    Object.defineProperty(object, key, { value: {}, writable: false });
    const target = {};
    print(!Reflect.set(target, key, testValue, object), key);
    print(!target.hasOwnProperty(key), key);
    print(Object.getOwnPropertyDescriptor(object, key).value !== testValue, key);
}

for (const [object, key] of testCases()) {
    Object.defineProperty(object, key, { value: {}, writable: true, configurable: false });
    object[key] = testValue;

    const desc = Object.getOwnPropertyDescriptor(object, key);
    print(desc.value === testValue, key);
    print(desc.writable, key);
    print(!desc.enumerable, key);
    print(!desc.configurable, key);
}

for (const [object, key] of testCases()) {
    Object.defineProperty(object, key, { value: {}, writable: true, enumerable: true });
    const target = {};
    print(Reflect.set(target, key, testValue, object), key);

    const desc = Object.getOwnPropertyDescriptor(object, key);
    print(desc.value === testValue, key);
    print(desc.writable, key);
    print(desc.enumerable, key);
    print(desc.configurable, key);
}
