




var a = [];
function f() {
    try {
        f();
    } catch (e) {
        a.foo = 100;
    }
}
f();

print("pass");