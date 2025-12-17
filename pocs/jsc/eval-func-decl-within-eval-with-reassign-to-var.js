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
        var f = 20;
        eval('var f = 15; eval(" { function f() { }; } ")');
        print(typeof f, "function");
    }
    print(typeof f, "function", "#1");
}

for (var i = 0; i < testLoopCount; i++) {
    foo();
    print(() => f, "ReferenceError: Can't find variable: f");
}

function boo() {
    {
        var l = 20;
        eval('{ let l = 15; eval(" { function l() { }; } ")}');
        print(l, 20, "#3");
    }
    print(typeof l, 'number', "#4");
}

for (var i = 0; i < testLoopCount; i++){
    boo();
    print(() => l, "ReferenceError: Can't find variable: l");
}

function foobar() { 
    eval("if (false) { function _bar() { } }"); 
    print(_bar, undefined); 
}

for (var i = 0; i < testLoopCount; i++){
    foobar();
    print(() => _bar, "ReferenceError: Can't find variable: _bar");
}



function goo() {
    {   
        var error = false;
        try {
            let f = 20;
            eval('var f = 15; eval(" { function f() { }; } ")');
        } catch (e) {
            error = e instanceof SyntaxError;
        }
        print(error, true, "syntax error should be raisen");
    }
    print(typeof f, "undefined", "#6");
}

for (var i = 0; i < testLoopCount; i++) {
    goo();
    print(typeof f, "undefined", "#7");
}

function hoo() {
    {
        let h = 20;
        try { eval('var h = 15;'); } catch (e) { var evalError = e; }
        print(evalError.toString(), "SyntaxError: Can't create duplicate variable in eval: 'h'");
        eval('eval("if (false) { function h() {} } ");');
        print(h, 20);
    }
    print(typeof h, "undefined");
}

for (var i = 0; i < testLoopCount; i++) {
    hoo();
    print(() => h, "ReferenceError: Can't find variable: h");
}

function joo() {
    {
        var h = 20;
        eval('var h = 15; eval(" if (false){ function h() { }; } ")');
        print(typeof h, "number");
    }
    print(typeof h, "number", "#10");
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
    print(() => h, "ReferenceError: Can't find variable: h");
}

function loo() { 
    let error;
    try {
        let h = 20;
        eval("var h; if (false) { function h() { } }");
    } catch (e) {
        error = e;
    }

    print(`${error}`, "SyntaxError: Can't create duplicate variable in eval: 'h'", "#13");
}

for (var i = 0; i < testLoopCount; i++) {
    loo();
    print(() => h, "ReferenceError: Can't find variable: h");
}
