


load(libdir + "non262.js");

if (typeof assertWarning === 'undefined') {
    var assertWarning = function assertWarning(f, pattern) {
        enableLastWarning();

        
        clearLastWarning();
        f();
        var warning = getLastWarning();
        clearLastWarning();

        disableLastWarning();

        if (warning) {
            if (!warning.message.match(pattern)) {
                throw new Error(`assertWarning failed: "${warning.message}" does not match "${pattern}"`);
            }
            return;
        }

        throw new Error("assertWarning failed: no warning");
    };
}

if (typeof assertNoWarning === 'undefined') {
    var assertNoWarning = function assertNoWarning(f, msg) {
        enableLastWarning();

        
        clearLastWarning();
        f();
        var warning = getLastWarning();
        clearLastWarning();

        disableLastWarning();

        if (warning) {
            if (msg) {
                print("assertNoWarning: " + msg);
            }

            throw Error("assertNoWarning: Unexpected warning when calling: " + f);
        }
    };
}

if (typeof assertErrorMessage === 'undefined') {
    var assertErrorMessage = function assertErrorMessage(f, ctor, test) {
        try {
            f();
        } catch (e) {
            
            
            if (e === "out of memory")
                throw e;
            if (!(e instanceof ctor))
                throw new Error("Assertion failed: expected exception " + ctor.name + ", got " + e);
            if (typeof test == "string") {
                if (test != e.message)
                    throw new Error("Assertion failed: expected " + test + ", got " + e.message);
            } else {
                if (!test.test(e.message))
                    throw new Error("Assertion failed: expected " + test.toString() + ", got " + e.message);
            }
            return;
        }
        throw new Error("Assertion failed: expected exception " + ctor.name + ", no exception thrown");
    };
}

if (typeof assertTypeErrorMessage === 'undefined') {
    var assertTypeErrorMessage = function assertTypeErrorMessage(f, test) {
      assertErrorMessage(f, TypeError, test);
    };
}

if (typeof assertRangeErrorMessage === 'undefined') {
    var assertRangeErrorMessage = function assertRangeErrorMessage(f, test) {
      assertErrorMessage(f, RangeError, test);
    };
}
