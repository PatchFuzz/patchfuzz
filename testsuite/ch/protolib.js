





if (this.WScript && this.WScript.LoadScriptFile) {
    WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

function make_engine(thread) {
    return WScript.LoadScriptFile("protolib.js", thread || "samethread");
}


function run(f) {
    return eval("(" + f + ")()");
}



var __saved__proto__desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");


assert.throws__proto__ThisNotObject = function (f, method) {
    assert.throws(f, TypeError, undefined, (method || "Object.prototype.__proto__") + ": 'this' is not an Object");
};


assert.throws__proto__ArgNotObject = function (f, method) {
    assert.throws(f, TypeError, undefined, (method || "Object.setPrototypeOf") + ": argument is not an Object");
};


assert.throws__proto__ArgNotObjectOrNull = function (f, method) {
    assert.throws(f, TypeError, undefined, (method || "Object.prototype.__proto__") + ": argument is not an Object and is not null");
};


assert.throws__proto__Cyclic = function (f, method) {
    assert.throws(f, TypeError, undefined, "Cyclic __proto__ value");
};

function disable__proto__() {
    delete Object.prototype.__proto__;
}

function verify__proto__enabled() {
    assert.isTrue(Object.prototype.hasOwnProperty("__proto__"), "__proto__ enabled, Object.prototype must have own property __proto__");

    var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
    assert.isTrue(__saved__proto__desc.get === desc.get, "must have original getter");
    assert.isTrue(__saved__proto__desc.set === desc.set, "must have original setter");
    

    var p = { a: 0 };
    var o = { b: 1 };

    assert.isTrue(o.__proto__ === Object.getPrototypeOf(o));
    assert.areEqual(Object.prototype, o.__proto__, "__proto__ enabled, __proto__ value should be [[prototype]]");

    o.__proto__ = p;
    assert.isTrue(o.__proto__ === Object.getPrototypeOf(o));
    assert.areEqual(p, o.__proto__, "__proto__ enabled, [[prototype]] should be changed");

    Object.setPrototypeOf(o, Object.prototype);
    assert.isTrue(o.__proto__ === Object.getPrototypeOf(o));
    assert.areEqual(Object.prototype, o.__proto__);
}

function verify__proto__disabled(label) {
    var p = { a: 0 };
    var o = { b: 1 };

    assert.areEqual(Object.prototype, Object.getPrototypeOf(o));
    o.__proto__ = p;
    assert.areEqual(Object.prototype, Object.getPrototypeOf(o), "__proto__ disabled, [[prototype]] should not be changed " + (label || ""));
    
    Object.setPrototypeOf(o, p); 
    assert.areEqual(p, Object.getPrototypeOf(o));
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
