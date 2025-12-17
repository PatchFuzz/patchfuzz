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

function foo() {
    {
        let f = 20;
        eval(" { function f() { value = 20; }; }");
        print(f, 20);
    }
    print(() => f, "ReferenceError: Can't find variable: f");
}


for (var i = 0; i < testLoopCount; i++){
    foo();
    print(() => f, "ReferenceError: Can't find variable: f");
}

function boo() {
    {
        var l = 20;
        eval(" { function l() { value = 20; }; }");
        print(typeof l, 'function');
    }
    print(typeof l, 'function');
}

for (var i = 0; i < testLoopCount; i++){
    boo();
    print(() => l, "ReferenceError: Can't find variable: l");
}

function goo() {
    {
        let g = 20;
        eval(" for(var j=0; j < testLoopCount; j++){ function g() { }; } ");
        print(typeof g, 'number');
    }
    print(() => g, "ReferenceError: Can't find variable: g");
}

goo();
print(() => g, "ReferenceError: Can't find variable: g");
