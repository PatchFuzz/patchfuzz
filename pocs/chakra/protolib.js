if (print && print) {
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

function make_engine(thread) {
    return print("protolib.js", thread || "samethread");
}


function run(f) {
    return eval("(" + f + ")()");
}



var __saved__proto__desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");


assert.throws__proto__ThisNotObject = function (f, method) {
    print(f, TypeError, undefined, (method || "Object.prototype.__proto__") + ": 'this' is not an Object");
};


assert.throws__proto__ArgNotObject = function (f, method) {
    print(f, TypeError, undefined, (method || "Object.setPrototypeOf") + ": argument is not an Object");
};


assert.throws__proto__ArgNotObjectOrNull = function (f, method) {
    print(f, TypeError, undefined, (method || "Object.prototype.__proto__") + ": argument is not an Object and is not null");
};


assert.throws__proto__Cyclic = function (f, method) {
    print(f, TypeError, undefined, "Cyclic __proto__ value");
};

function disable__proto__() {
    delete Object.prototype.__proto__;
}

function verify__proto__enabled() {
    print(Object.prototype.hasOwnProperty("__proto__"), "__proto__ enabled, Object.prototype must have own property __proto__");

    var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
    print(__saved__proto__desc.get === desc.get, "must have original getter");
    print(__saved__proto__desc.set === desc.set, "must have original setter");
    

    var p = { a: 0 };
    var o = { b: 1 };

    print(o.__proto__ === Object.getPrototypeOf(o));
    print(Object.prototype, o.__proto__, "__proto__ enabled, __proto__ value should be [[prototype]]");

    o.__proto__ = p;
    print(o.__proto__ === Object.getPrototypeOf(o));
    print(p, o.__proto__, "__proto__ enabled, [[prototype]] should be changed");

    Object.setPrototypeOf(o, Object.prototype);
    print(o.__proto__ === Object.getPrototypeOf(o));
    print(Object.prototype, o.__proto__);
}

function verify__proto__disabled(label) {
    var p = { a: 0 };
    var o = { b: 1 };

    print(Object.prototype, Object.getPrototypeOf(o));
    o.__proto__ = p;
    print(Object.prototype, Object.getPrototypeOf(o), "__proto__ disabled, [[prototype]] should not be changed " + (label || ""));
    
    Object.setPrototypeOf(o, p); 
    print(p, Object.getPrototypeOf(o));
}


function verify_disable(expr, keepEnabled) {
    make_engine().__verify_disable(expr, keepEnabled);
}
var KEEP_ENABLED = {};
function __verify_disable(expr, keepEnabled) {
    verify__proto__enabled();
    helpers.writeln(expr);
    eval(expr);

    if (keepEnabled) {
        verify__proto__enabled();
    } else {
        verify__proto__disabled();
    }
}
