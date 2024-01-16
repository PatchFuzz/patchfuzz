


let c, i = 0, threw = false;
class C {
    #x;
    constructor() { return i < 30 ? this : { [Symbol.toStringTag]: "without #x" }; }
    static x(obj) { return obj.#x = i++; }
    get [Symbol.toStringTag]() { return "with #x" }
}

try {
    for (let j = 0; j < 50; ++j) {
        let obj = new C;
        let result = C.x(obj);
        if (result !== j)
            throw new Error(`Expected C.x(${obj}) to be ${j}, but found ${result}`);
    }
} catch (e) {
    threw = true;
    
    
    if (i !== 31 || e.constructor !== TypeError) {
        throw e;
    }
}

if (!threw)
    throw new Error("Expected TypeError, but no exception was thrown");
