
Array.__proto__ = createGlobalObject();

function f() { const c = Array.__proto__ }

function test() {
    with(0) {
        f();
    }
}
noInline(test);

for (let i = 0; i < 100; i++) {
    test();
}
