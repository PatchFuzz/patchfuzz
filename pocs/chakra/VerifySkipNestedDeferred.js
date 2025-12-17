







function print(left, right, msg) {
    if (left != right) {
        print(`Fail: ${msg} ('${left}' != '${right}')`);
        return false;
    }
    print(`Pass: ${msg}`);
    return true;
}
var promiseToString ='[object Promise]';

var x = 'something'
function bar() {
    function foo() {
        function baz() {
            function onemorefoo() {
                return x;
            }
            return onemorefoo();
        }
        return baz();
    }
    return foo();
}
print(x, bar(), 'A few nested functions');

function foo() {
    var n = (function() {
        var x = 'x';
        var l = () => {
            var x = 'y';
            return function() {
                return x;
            }
        }
        return l;
    })()
    return n()();
}
print('y', foo(), 'Nested unnamed function expression');

function f1() {
    async function a1() {
        async function a2() {
            return x;
        }
        return a2();
    }
    return a1();
}
print(promiseToString, f1(), 'Function with nested async functions');

function f2() {
    function* g1() {
        function* g2() {
            yield x;
        }
        yield g2().next().value;
    }
    return g1().next().value;
}
print(x, f2(), 'Function with nested generator functions');

function f3() {
    var l1 = (s) => x;
    return l1()
}
print(x, f3(), 'Nested concise-body lambda');


function f4() {
    var l1 = (s) => { return x }
    return l1()
}
print(x, f4(), 'Simple nested lambda');

function f5() {
    var l1 = s => { return x }
    return l1()
}
print(x, f5(), 'Nested concise-argument list lambda');

function f52() {
    var l5 = s => { return s => { return x; } };
    return l5();
}
print(x, f52()(), 'Couple of nested lambda');

function f6() {
    var o = {
        method(s) { return x; },
        get method2() { return x; },
        ['method3'](arg) { return x; },
        get ['method4']() { return x; },
        async method5(s) { return x; },
        *method6(s) { yield x; },
        *['method7'](s) { yield x; },
        async ['method8'](s) { return x; },
        f8: function() { return x; },
        f9: () => { return x; }
    }
    
    return print(x, o.method(), 'Simple method') &&
           print(x, o.method2, 'Simple getter') &&
           print(x, o.method3(), 'Computed-property named method') &&
           print(x, o.method4, 'Computed-property named getter') &&
           print(promiseToString, o.method5(), 'Async method') &&
           print(x, o.method6().next().value, 'Generator method') &&
           print(x, o.method7().next().value, 'Generator method with computed-property name') &&
           print(promiseToString, o.method8(), 'Async method with computed-property name') &&
           print(x, o.f8(), 'Function stored in object literal property') &&
           print(x, o.f9(), 'Lambda stored in object literal property');
}
print(true, f6(), 'Several object literal methods');

function f7() {
    eval('function f5(s) { return x; }');
    return f5();
}
print(x, f7(), 'Simple function defined in eval');
    
function f8() {
    eval('function f7(r) { function f9() { return x; }; return f9(); }');
    return f7();
}
print(x, f8(), 'Nested eval functions');
