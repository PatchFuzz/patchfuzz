

function runNearStackLimit(f) {
    function t() {
        try {
            return t();
        } catch (e) {
            return f();
        }
    }
    return t();
};

runNearStackLimit(() => { });
runNearStackLimit(() => { });

function f2(a, b) {
    'use strict';
    try {
        a.push(arguments[0] + arguments[2] + a + undefinedVariable);
    } catch (e) { }
}

try {
    runNearStackLimit(() => {
        return f2(1, 2, 3);
    });
} catch (e) {}

try {
    runNearStackLimit();
} catch { }
