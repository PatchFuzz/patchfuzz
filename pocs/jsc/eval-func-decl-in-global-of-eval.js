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
}


function bar() {
    {
        let f = 20;
        let value = 10; 
        eval("function f() { value = 20; }; f();");
    }
}


for (var i = 0; i < testLoopCount; i++){
    print(() => bar(), "SyntaxError: Can't create duplicate variable in eval: 'f'");
    print(() => f, "ReferenceError: Can't find variable: f");
}

function baz() {
    {
        var l = 20;
        var value = 10;
        eval("function l() { value = 20; }; l();");
        print(typeof l, 'function');
        print(value, 20);
    }
    print(typeof l, 'function');
}

for (var i = 0; i < testLoopCount; i++){
    baz();
    print(() => l, "ReferenceError: Can't find variable: l");
}

function foobar() {
    {
        let g = 20;
        let value = 10;
        eval("function l() { value = 30; }; l();");
        print(typeof g, 'number');
        print(value, 30);
    }
    print(() => g, "ReferenceError: Can't find variable: g");
}

foobar();
print(() => g, "ReferenceError: Can't find variable: g");

(function() {
    try {
        let b;
        let c;
        eval('var a; var b; var c;');
    } catch (e) {
        var error = e;
    }

    print(error.toString(), "SyntaxError: Can't create duplicate variable in eval: 'c'");
    print(() => a, "ReferenceError: Can't find variable: a");
    print(() => b, "ReferenceError: Can't find variable: b");
    print(() => c, "ReferenceError: Can't find variable: c");
})();

(function() {
    try {
        let x1;
        eval('function x1() {} function x2() {} function x3() {}');
    } catch (e) {
        var error = e;
    }

    print(error.toString(), "SyntaxError: Can't create duplicate variable in eval: 'x1'");
    print(() => x1, "ReferenceError: Can't find variable: x1");
    print(() => x2, "ReferenceError: Can't find variable: x2");
    print(() => x3, "ReferenceError: Can't find variable: x3");
})();

(function() {
    var x3;
    try {
        let x2;
        eval('function x1() {} function x2() {} function x3() {}');
    } catch (e) {
        var error = e;
    }

    print(error.toString(), "SyntaxError: Can't create duplicate variable in eval: 'x2'");
    print(() => x1, "ReferenceError: Can't find variable: x1");
    print(() => x2, "ReferenceError: Can't find variable: x2");
    print(x3, undefined);
})();
