;

if ('captureStackTrace' in Error) {
    print(Error.captureStackTrace.length, 2);

    let x = Error.captureStackTrace({});
    print(x, undefined);

    print(() => Error.captureStackTrace(), TypeError);
    print(() => Error.captureStackTrace(2), TypeError);

    Error.captureStackTrace({}, 2);
    Error.captureStackTrace({}, null);
    Error.captureStackTrace({}, {});

    function caller(f) {
        return f();
    }

    function fill() {
        let x = {}
        Error.captureStackTrace(x, caller);
        return x;
    }

    function test_elision() {
        let x = caller(fill);
        let { stack } = x;
        print(stack.includes("caller"), false);
        print(stack.includes("fill"), false);


        ({ stack } = caller(() => caller(fill)))
        print(stack);
        print(stack.includes("caller"), true); 
        print(stack.includes("fill"), false);
    }

    test_elision();

    function nestedLambda(f) {
        (() => {
            (() => {
                (() => {
                    (() => {
                        f();
                    })();
                })();
            })();
        })();
    }


    
    
    function test_no_match() {
        let obj = {};
        
        
        let capture = () => Error.captureStackTrace(obj, test_elision);
        nestedLambda(capture);
        print(obj.stack, "");
    }
    test_no_match()

    function count_frames(str) {
        return str.split("\n").length
    }

    function test_nofilter() {
        let obj = {};
        let capture = () => Error.captureStackTrace(obj);
        nestedLambda(capture);
        print(count_frames(obj.stack), 9);
    }
    test_nofilter();

    function test_in_eval() {
        let obj = eval(`
        let obj = {};
        let capture = () => Error.captureStackTrace(obj);
        nestedLambda(capture);
        obj
        `)

        
        print(count_frames(obj.stack), 10);
    }
    test_in_eval();

    
    
    
    const stackGetter = Object.getOwnPropertyDescriptor(Error.prototype, 'stack').get;
    const getStack = function (obj) {
        return stackGetter.call(obj);
    };

    function test_uncensored() {
        let err = undefined;
        function create_err() {
            err = new Error;
            Error.captureStackTrace(err, test_uncensored);
        }

        nestedLambda(create_err);

        
        
        print(count_frames(err.stack), 2);
        print(count_frames(getStack(err)), 9)
    }
    test_uncensored()

    
    
    function compare_stacks() {
        function censor_column(str) {
            return str.replace(/:(\d+):\d+\n/g, ":$1:censored\n")
        }

        let obj = {};
        let err = (Error.captureStackTrace(obj), new Error)
        print(censor_column(err.stack), censor_column(obj.stack));
    }
    compare_stacks();
    nestedLambda(compare_stacks)

    

    function test_in_global(global) {
        global.evaluate(caller.toString());
        global.evaluate(fill.toString());
        global.evaluate(test_elision.toString());
        global.evaluate("test_elision()");

        global.evaluate(nestedLambda.toString())
        global.evaluate(test_no_match.toString());
        global.evaluate("test_no_match()");


        global.evaluate(compare_stacks.toString());
        global.evaluate(`
            compare_stacks();
            nestedLambda(compare_stacks)
        `)
    }

    let global = newGlobal();
    test_in_global(global);

    let global2 = newGlobal({ principal: 0 });
    test_in_global(global2)

    let global3 = newGlobal({ principal: 0xfffff });
    test_in_global(global3)

    
    const caller_proxy = new Proxy(caller, {
        apply: function (target, thisArg, arguments) {
            return target(...arguments);
        }
    });

    function fill_proxy() {
        let x = {}
        Error.captureStackTrace(x, caller_proxy);
        return x;
    }

    
    function test_proxy_elision() {
        let x = caller_proxy(fill_proxy);
        let { stack } = x;
        print(stack.includes("caller"), true);
        print(stack.includes("fill_proxy"), true);
    }
    test_proxy_elision();

    const trivial_proxy = new Proxy(caller, {});
    function fill_trivial() {
        let x = {}
        Error.captureStackTrace(x, trivial_proxy);
        return x;
    }

    
    function test_trivial_elision() {
        let x = caller(fill_trivial);
        let { stack } = x;
        print(stack.includes("caller"), true);
        print(stack.includes("fill"), true);
    }
    test_trivial_elision();

    
    function test_bind_elision() {
        let b = caller.bind(undefined, fill);
        let { stack } = b();
        print(stack.includes("caller"), false);
        print(stack.includes("fill"), false);
    }
    test_bind_elision();

    

    let nr = newGlobal({ newCompartment: true })
    nr.eval(`globalThis.x = {}`);
    Error.captureStackTrace(nr.x);

    
    function test_strict_definition() {
        "use strict";
        print(() => Error.captureStackTrace(Object.freeze({ stack: null })), TypeError);
    }
    test_strict_definition();

    function test_property_descriptor() {
        let o = {};
        Error.captureStackTrace(o);
        let desc = Object.getOwnPropertyDescriptor(o, "stack");
        print(desc.configurable, true)
        print(desc.writable, true)
        print(desc.enumerable, false)
    }
    test_property_descriptor();

    function test_delete() {
        let o = {};
        Error.captureStackTrace(o);
        delete o.stack
        print("stack" in o, false)
    }
    test_delete();

    
    
    
    
    
    
    

    
    
    
    
    let count = 0;
    function check(expected, stack) {
        print("check(" + JSON.stringify(expected) + ") against:\n" + stack);
        count++;

        
        
        var split = stack.split(/(.)?@.*\n/).slice(0, -1);
        if (split[split.length - 1] === undefined)
            split = split.slice(0, -2);

        print(JSON.stringify(split));
        
        print(split.length, expected.length * 2);
        for (var i = 0; i < expected.length; i++)
            print(split[i * 2 + 1], expected[i]);
    }

    var low = newGlobal({ principal: 0 });
    var mid = newGlobal({ principal: 0xffff });
    var high = newGlobal({ principal: 0xfffff });

    eval('function a() { let o = {}; Error.captureStackTrace(o); check("a",    o.stack); b(); }');
    low.eval('function b() { let o = {}; Error.captureStackTrace(o); check("b",    o.stack); c(); }');
    mid.eval('function c() { let o = {}; Error.captureStackTrace(o); check("cba",  o.stack); d(); }');
    high.eval('function d() { let o = {}; Error.captureStackTrace(o); check("dcba", o.stack); e(); }');

    
    eval('function e() { let o = {}; Error.captureStackTrace(o); check("ecba",     o.stack); f(); }');

    low.eval('function f() { let o = {}; Error.captureStackTrace(o); check("fb",       o.stack); g(); }');
    mid.eval('function g() { let o = {}; Error.captureStackTrace(o); check("gfecba",   o.stack); h(); }');
    high.eval('function h() { let o = {}; Error.captureStackTrace(o); check("hgfedcba", o.stack);      }');

    
    b = low.b;
    low.c = mid.c;
    mid.d = high.d;
    high.e = e;
    f = low.f;
    low.g = mid.g;
    mid.h = high.h;

    low.check = mid.check = high.check = check;

    
    a();

    print(count, 8);

    
    low.eval("low_target = {}");
    mid.eval("mid_target = {}");
    high.eval("high_target = {}");

    high.low_target = mid.low_target = low.low_target;
    high.mid_target = low.mid_target = mid.mid_target;
    mid.high_target = low.high_target = high.high_target;

    high.low_cst = mid.low_cst = low.low_cst = low.Error.captureStackTrace;
    high.mid_cst = low.mid_cst = mid.mid_cst = mid.Error.captureStackTrace;
    mid.high_cst = low.high_cst = high.high_cst = high.Error.captureStackTrace;

    for (let g of [low, mid, high]) {
        print("low_target" in g, true);
        print("mid_target" in g, true);
        print("high_target" in g, true);

        print("low_cst" in g, true);
        print("mid_cst" in g, true);
        print("high_cst" in g, true);

        
        
        g.eval("function z(f) { f() }")
    }

    low.eval("function q() { Error.captureStackTrace(low_target); }")


    high.q = low.q;

    
    
    high.eval("z(q)");
    check("q", low.low_target.stack);

    low.eval("function r() { high_cst(low_target) }")
    high.r = low.r;

    
    high.eval("function t() { z(r) }");
    high.t();
    check("rzt", low.low_target.stack);


}
