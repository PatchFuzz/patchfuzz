"use strict";

function print(b, m = "Bad assertion") {
    if (!b)
        throw new Error(m);
}

assert.eq = function eq(expected, actual, m = `Expected «${actual}» to be «${expected}».`) {
    print(expected === actual, m); 
}

assert.arrEq = function arrEq(expected, actual, m = `Expected «${actual}» to be «${expected}».`) {
    print(Array.isArray(expected));
    print(Array.isArray(actual), `Expected «${actual}» to be an Array.`);
    print(expected.length, actual.length, `Expected «${actual}» to have ${expected.length} items`);
    for (let i = 0; i < expected.length; ++i) {
        let e = expected[i], a = actual[i];
        if (Array.isArray(e))
            print(e, a);
        else
            print(expected[i], actual[i]);
    }
}


{
    let log = [];
    let p = new Proxy(Object.create(null, {
        x: {
            enumerable: true,
            configurable: true,
            value: 0
        },
    }), {
        getOwnPropertyDescriptor(target, pname) {
            log.push(`gopd ${pname}`);
            return Reflect.getOwnPropertyDescriptor(target, pname);
        }
    });
    for (let k in p) log.push(`enumerate ${k}`);

    print([
        "gopd x",
        "enumerate x",
    ], log);
}


{
    let log = [];
    let p = new Proxy(Object.create(null, {
        x: {
            enumerable: false,
            configurable: true,
            value: 0
        },
    }), {
        getOwnPropertyDescriptor(target, pname) {
            log.push(`gopd ${pname}`);
            return Reflect.getOwnPropertyDescriptor(target, pname);
        }
    });
    for (let k in p) log.push(`enumerate ${k}`);

    print([
        "gopd x",
    ], log);
}


{
    let log = [];
    let p = new Proxy(Object.create(null, {
        x: {
            enumerable: true,
            configurable: true,
            value: 0
        },
    }), {
        getOwnPropertyDescriptor(target, pname) {
            log.push(`gopd ${pname}`);
            return Reflect.getOwnPropertyDescriptor(target, pname);
        },
        ownKeys(target) {
            return Reflect.ownKeys(target);
        }
    });
    for (let k in p) log.push(`enumerate ${k}`);

    print([
        "gopd x",
        "enumerate x",
    ], log);
}


{
    let log = [];
    let p = new Proxy(Object.create(null, {
        x: {
            enumerable: false,
            configurable: true,
            value: 0
        },
    }), {
        getOwnPropertyDescriptor(target, pname) {
            log.push(`gopd ${pname}`);
            return Reflect.getOwnPropertyDescriptor(target, pname);
        },
        ownKeys(target) {
            return Reflect.ownKeys(target);
        }
    });
    for (let k in p) log.push(`enumerate ${k}`);

    print([
        "gopd x",
    ], log);
}
