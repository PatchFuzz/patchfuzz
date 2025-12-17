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
    print(typeof f, "function");
}

for (var i = 0; i < testLoopCount; i++){
    foo();
    print(() => f, "ReferenceError: Can't find variable: f");
}

function boo() {
    {
        print(() => l, "ReferenceError: Can't find variable: l");
        eval('{ var l = 15; eval(" { function l() { }; } ")}');
        print(typeof l, "function", "#3");
    }
    print(typeof l, 'function', "#4");
}

for (var i = 0; i < testLoopCount; i++){
    boo();
    print(() => l, "ReferenceError: Can't find variable: l");
}

function hoo() {
    {
        print(() => h, "ReferenceError: Can't find variable: h");
        eval('eval(" if (false){ function h() { }; } ");');
        print(h, undefined, '');
    }
    print(h, undefined, '');
}

for (var i = 0; i < testLoopCount; i++){
    hoo();
    print(() => h, "ReferenceError: Can't find variable: h");
}

function joo() {
    {
        print(() => h, "ReferenceError: Can't find variable: h");
        eval('eval(" if (true){ function h() { }; } ")');
        print(typeof h, "function" );
    }
    print(typeof h, "function", "#10");
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
}

for (var i = 0; i < testLoopCount; i++){
    koo();
    print(() => k, "ReferenceError: Can't find variable: k");
}
