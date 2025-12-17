var assert = function (result, expected, message) {
    if (result !== expected) {
        throw new Error('Error in assert. Expected "' + expected + '" but was "' + result + '":' + message );
    }
};

var assertThrow = function (cb, expected) {
    let error = null;
    try {
        cb();
    } catch(e) {
        error = e;  
    }
    if (error === null) {
        throw new Error('Error is expected. Expected "' + expected + '" but error was not thrown."');
    }
    if (error.toString() !== expected) {
        throw new Error('Error is expected. Expected "' + expected + '" but error was "' + error + '"');
    }
};

function foo() {
    {   
        print(() => f, "ReferenceError: Can't find variable: f");
        eval('eval(" { function f() { }; } ")');
        print(typeof f, "function");
    }
    print(typeof f, "function", "#1");
    delete f;
    print(() => f, "ReferenceError: Can't find variable: f", "#1");
}

for (var i = 0; i < testLoopCount; i++) {
    foo();
    print(() => f, "ReferenceError: Can't find variable: f");
}

function boo() {
    {
        print(typeof l, "undefined", "#5");
        eval('{ var l = 15; eval(" { function l() { }; } ")}');
        print(typeof l, "function", "#3");
    }
    print(typeof l, 'function', "#4");
    delete l;
    print(() => f, "ReferenceError: Can't find variable: f");
}

for (var i = 0; i < testLoopCount; i++){
    boo();
    print(() => f, "ReferenceError: Can't find variable: f");
}

function joo() {
    {
        print(typeof h, "undefined" );
        eval('eval(" if (true){ function h() { }; } ")');
        print(typeof h, "function" );
    }
    print(typeof h, "function", "#10");
    delete h;
    print(() => h, "ReferenceError: Can't find variable: h");
}

for (var i = 0; i < testLoopCount; i++){
    joo();
    print(() => h, "ReferenceError: Can't find variable: h");
}

function koo() {
    {
        var k = 20;
        eval('var k = 15; eval(" if (true){ function k() { }; } ")');
        print(typeof k, "function" );
    }
    print(typeof k, "function", "#12");
    delete k;
    print(typeof k, "function", "#12");
}

for (var i = 0; i < testLoopCount; i++){
    koo();
    print(() => k, "ReferenceError: Can't find variable: k");
}
