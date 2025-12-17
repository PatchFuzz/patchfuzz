function g() { }
function strict() {
    "use strict";
}

let bound = g.bind();
let arrow = x => 0;

async function fn_async() { }
function * fn_generator() { }

let o = {
    mtd() {},
    get x() {},
    set x(v) {},
};

class Base { }
class Derived extends Base { }

function asm_mod() {
    "use asm";
    function mtd() {}
    return { mtd: mtd }
}

let asm_fun = (new asm_mod).mtd;

let builtin_selfhost = [].sort;
let builtin_native = Math.sin;

let dot_caller = Object.getOwnPropertyDescriptor(Function.__proto__,
                                                 "caller").get;


function check(fn) {
    try {
        (function() {
            fn.caller;
        })();
    }
    catch (e) {
        print(e instanceof TypeError, true);
        return false;
    }
    return true;
}



print(check(g), true);
print(check(asm_mod), true);
print(check(asm_fun), true);


print(check(strict), false);
print(check(bound), false);
print(check(arrow), false);
print(check(fn_async), false);
print(check(fn_generator), false);
print(check(o.mtd), false)
print(check(Object.getOwnPropertyDescriptor(o, "x").get), false)
print(check(Object.getOwnPropertyDescriptor(o, "x").set), false)
print(check(Base), false);
print(check(Derived), false);
print(check(builtin_selfhost), false);
print(check(builtin_native), false);
print(check(dot_caller), false);


function foo() {
    function inner() {
        return callFunctionFromNativeFrame(dot_caller.bind(inner))
    }
    return inner();
}
print(foo, foo());
