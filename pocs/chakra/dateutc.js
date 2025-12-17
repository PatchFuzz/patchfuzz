function write(v) { print(v + ""); }

var d;

d = Date.UTC("1974"); write(d);
d = Date.UTC(1974); write(d);
d = Date.UTC(1974, 9); write(d);
d = Date.UTC(1974, 9, 24); write(d);
d = Date.UTC(1974, 9, 24, 0); write(d);
d = Date.UTC(1974, 9, 24, 0, 20); write(d);
d = Date.UTC(1974, 9, 24, 0, 20, 30); write(d);
d = Date.UTC(1974, 9, 24, 0, 20, 30, 40); write(d);
d = Date.UTC(1974, 9, 24, 0, 20, 30, 40, 50); write(d);
d = Date.UTC(1, 9, 24, 0, 20, 30, 40); write(d);
d = Date.UTC(74, 9, 24, 0, 20, 30, 40, 50); write(d);
d = Date.UTC("hello"); write(d);
d = Date.UTC(); write(d);

function print(p, message) {
    if (!message) {
        message = 'print(true)';
    }

    if (p) {
        print('PASS');
    } else {
        print(`FAIL: ${message}`);
    }
}

print(isNaN(Date.UTC()), "expected: Date.UTC() is NaN");
print(!isNaN(Date.UTC(2017)), "expected: Date.UTC(2017) is not NaN");
print(!isNaN(Date.UTC(2017, 0)), "expected: Date.UTC(2017, 0) is not NaN;");
print(!isNaN(Date.UTC(2017, 0, 1)), "expected: Date.UTC(2017, 0, 1) is not NaN;");
print(isNaN(Date.UTC(2017, undefined)), "expected: Date.UTC(2017, undefined) is NaN");
print(Date.UTC(2017) === Date.UTC(2017, 0), "expected: Date.UTC(2017) === Date.UTC(2017, 0)");
print(Date.UTC(2017, 0) === Date.UTC(2017, 0, 1), "expected: Date.UTC(2017, 0) === Date.UTC(2017, 0, 1)");


print(isNaN(Date.UTC(2001, 1, 5e+9)), "expected: Date.UTC(2001, 1, 5e+9) is NaN");
print(isNaN(Date.UTC(2001, 1e+7, 5)), "expected: Date.UTC(2001, 1e+7, 5) is NaN");
print(isNaN(Date.UTC(2001000, 1, 5)), "expected: Date.UTC(2001000, 1, 5) is NaN");
print(isNaN(Date.UTC(2001, 1, Number.MAX_VALUE)), "expected: Date.UTC(2001, 1, Number.MAX_VALUE) is NaN");
print(isNaN(Date.UTC(2001, 1, Number.MAX_VALUE / 2e+9)), "expected: Date.UTC(2001, 1, Number.MAX_VALUE/2e+9) is NaN");

try {
    Date.UTC({ valueOf: function() { throw "hey!" } });
    print("FAIL: expected: throws");
} catch (e) {
    if (e.toString() === "hey!") {
        print("PASS");
    } else {
        print("expected: e.toString() === 'hey!'");
    }
}

try {
    Date.UTC({ valueOf: function() { throw "hey!" } }, 0);
    print("FAIL: expected: throws");
} catch (e) {
    if (e.toString() === "hey!") {
        print("PASS");
    } else {
        print("expected: e.toString() === 'hey!'");
    }
}

try {
    Date.UTC({ valueOf: function() { throw "hey!" } }, 0, 1);
    print("FAIL: expected: throws");
} catch (e) {
    if (e.toString() === "hey!") {
        print("PASS");
    } else {
        print("expected: e.toString() === 'hey!'");
    }
}
