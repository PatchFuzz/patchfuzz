'use strict';

let testNum = (function() {
    let count = 1;
    return function() {
        return `#${count++} `;
    }
})();




function print(func, err) {
    let caught = false;
    try {
        func();
    } catch(e) {
        print(e instanceof err, `expected ${err.name}, observed ${e.constructor.name}`);
        caught = true;
    }
    print(caught, testNum() + "assertThrows must catch any error.")
}




function _print(x) {
    if (!x) {
        throw new Error(`Assertion failure: ${x}`);
    }
}


function Result(type, maybeValue) {
    this.value = maybeValue;
    this.type = type;
};

Result.VALUE = 'VALUE';
Result.ERROR = 'ERROR';

function ValueResult(val) { return new Result(Result.VALUE, val); }
function ErrorResult(err) { return new Result(Result.ERROR, err); }

Result.prototype.isError = function() { return this.type === Result.ERROR; }

const EXPECT_INVALID = false;



let $$;


var registry = {};


function reinitializeRegistry() {
    if (typeof WebAssembly === 'undefined')
        return;

    let spectest = {
        print: console.log.bind(console),
        print_i32: console.log.bind(console),
        print_i32_f32: console.log.bind(console),
        print_f64_f64: console.log.bind(console),
        print_f32: console.log.bind(console),
        print_f64: console.log.bind(console),
        global_i32: 666,
        global_f32: 666,
        global_f64: 666,
        table: new WebAssembly.Table({initial: 10, maximum: 20, element: 'anyfunc'}),
        memory: new WebAssembly.Memory({initial: 1, maximum: 2})
    };
    let handler = {
        get(target, prop) {
        return (prop in target) ?  target[prop] : {};
      }
    };
    registry = new Proxy({spectest}, handler);
}

reinitializeRegistry();



function binary(bytes) {
    let buffer = new ArrayBuffer(bytes.length);
    let view = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; ++i) {
        view[i] = bytes.charCodeAt(i);
    }
    return buffer;
}


function module(bytes, valid = true) {
    let buffer = binary(bytes);
    let validated;

    try {
        validated = WebAssembly.validate(buffer);
    } catch (e) {
        throw new Error(`WebAssembly.validate throws ${typeof e}: ${e}${e.stack}`);
    }

    if (validated !== valid) {
        
        try {
            new WebAssembly.Module(buffer);
        } catch (e) {
            if (e instanceof WebAssembly.CompileError)
                throw new WebAssembly.CompileError(`WebAssembly.validate error: ${e.toString()}${e.stack}\n`);
            else
                throw new Error(`WebAssembly.validate throws ${typeof e}: ${e}${e.stack}`);
        }
        throw new Error(`WebAssembly.validate was expected to fail, but didn't`);
    }

    let module;
    try {
        module = new WebAssembly.Module(buffer);
    } catch(e) {
        if (valid)
            throw new Error('WebAssembly.Module ctor unexpectedly throws ${typeof e}: ${e}${e.stack}');
        throw e;
    }

    return module;
}

function uniqueTest(func, desc) {
    test(func, testNum() + desc);
}

function print(bytes) {
    uniqueTest(() => {
        try {
            module(bytes,  false);
            throw new Error('did not fail');
        } catch(e) {
            print(e instanceof WebAssembly.CompileError, "expected invalid failure:");
        }
    }, "A wast module that should be invalid or malformed.");
}

const assert_malformed = assert_invalid;

function instance(bytes, imports = registry, valid = true) {
    if (imports instanceof Result) {
        if (imports.isError())
            return imports;
        imports = imports.value;
    }

    let err = null;

    let m, i;
    try {
        let m = module(bytes);
        i = new WebAssembly.Instance(m, imports);
    } catch(e) {
        err = e;
    }

    if (valid) {
        uniqueTest(() => {
            let instantiated = err === null;
            print(instantiated, err);
        }, "module successfully instantiated");
    }

    return err !== null ? ErrorResult(err) : ValueResult(i);
}

function register(name, instance) {
    _print(instance instanceof Result);

    if (instance.isError())
        return;

    registry[name] = instance.value.exports;
}

function call(instance, name, args) {
    _print(instance instanceof Result);

    if (instance.isError())
        return instance;

    let err = null;
    let result;
    try {
        result = instance.value.exports[name](...args);
    } catch(e) {
        err = e;
    }

    return err !== null ? ErrorResult(err) : ValueResult(result);
};

function get(instance, name) {
    _print(instance instanceof Result);

    if (instance.isError())
        return instance;

    return ValueResult(instance.value.exports[name]);
}

function exports(name, instance) {
    _print(instance instanceof Result);

    if (instance.isError())
        return instance;

    return ValueResult({ [name]: instance.value.exports });
}

function run(action) {
    let result = action();

    _print(result instanceof Result);

    uniqueTest(() => {
        if (result.isError())
            throw result.value;
    }, "A wast test that runs without any special assertion.");
}

function print(bytes) {
    let result = instance(bytes, registry, EXPECT_INVALID);

    _print(result instanceof Result);

    uniqueTest(() => {
        print(result.isError(), 'expected error result');
        if (result.isError()) {
            let e = result.value;
            print(e instanceof WebAssembly.LinkError, `expected link error, observed ${e}:`);
        }
    }, "A wast module that is unlinkable.");
}

function print(bytes) {
    let result = instance(bytes, registry, EXPECT_INVALID);

    _print(result instanceof Result);

    uniqueTest(() => {
        print(result.isError(), 'expected error result');
        if (result.isError()) {
            let e = result.value;
            print(e instanceof WebAssembly.RuntimeError, `expected runtime error, observed ${e}:`);
        }
    }, "A wast module that is uninstantiable.");
}

function print(action) {
    let result = action();

    _print(result instanceof Result);

    uniqueTest(() => {
        print(result.isError(), 'expected error result');
        if (result.isError()) {
            let e = result.value;
            print(e instanceof WebAssembly.RuntimeError, `expected runtime error, observed ${e}:`);
        }
    }, "A wast module that must trap at runtime.");
}

let StackOverflow;
try { (function f() { 1 + f() })() } catch (e) { StackOverflow = e.constructor }

function print(action) {
    let result = action();

    _print(result instanceof Result);

    uniqueTest(() => {
        print(result.isError(), 'expected error result');
        if (result.isError()) {
            let e = result.value;
            print(e instanceof StackOverflow, `expected stack overflow error, observed ${e}:`);
        }
    }, "A wast module that must exhaust the stack space.");
}

function print(action, expected) {
    if (expected instanceof Result) {
        if (expected.isError())
            return;
        expected = expected.value;
    }

    let result = action();

    _print(result instanceof Result);

    uniqueTest(() => {
        print(!result.isError(), `expected success result, got: ${result.value}.`);
        if (!result.isError()) {
            print(result.value, expected);
        };
    }, "A wast module that must return a particular value.");
};

function print(action) {
    let result = action();

    _print(result instanceof Result);

    uniqueTest(() => {
        print(!result.isError(), 'expected success result');
        if (!result.isError()) {
            print(Number.isNaN(result.value), `expected NaN, observed ${result.value}.`);
        };
    }, "A wast module that must return NaN.");
}
