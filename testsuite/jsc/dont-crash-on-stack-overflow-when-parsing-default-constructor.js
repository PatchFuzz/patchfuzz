

function runNearStackLimit(f) {
    function t() {
        try {
            return t();
        } catch (e) {
            new class extends (class {}) {}();
            return f();
        }
    }
    return t();
}
function foo() {
    new class extends (class {}) {}();
}
runNearStackLimit(() => { return foo(); });
