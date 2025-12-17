var err = new Error();
err.e = "foo";

function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

function shouldThrow(func, errorMessage) {
    let error;
    try {
        func();
    } catch (e) {
        error = e;
    }

    if (!error)
        throw new Error(`Didn't throw!`);
    if (String(error) !== errorMessage)
        throw new Error(`Bad error: ${error}`);
}

(function() {
    var e = 1;
    try {
        throw err;
    } catch (e) {
        eval(`function e() { return 1; }`); 
        print(e === err);
    }
    print(e() === 1);
})();

(function() {
    var e = 1;
    try {
        throw err;
    } catch (e) {
        eval(`if (true) { function e() { return 1; } }`); 
        print(e === err);
    }
    print(e() === 1);
})();

(function() {
    var e = 1;
    try {
        throw err;
    } catch ({e}) {
        eval(`if (true) { function e() { return 1; } }`); 
        print(e === "foo");
    }
    print(e === 1);
})();

shouldThrow(function() {
    var e = 2;
    try {
        throw err;
    } catch ({e}) {
        eval(`function e() { return 1; }`); 
    }
}, "SyntaxError: Can't create duplicate variable in eval: 'e'");

shouldThrow(function() {
    var e = 2;
    try {
        throw err;
    } catch ({e}) {
        eval(`var e = 1;`); 
    }
}, "SyntaxError: Can't create duplicate variable in eval: 'e'");

shouldThrow(function() {
    try {
        throw err;
    } catch ({...e}) {
        eval(`var e;`); 
    }
}, "SyntaxError: Can't create duplicate variable in eval: 'e'");
