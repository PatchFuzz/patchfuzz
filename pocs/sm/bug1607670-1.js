var q = 0;
function fn() {}
var newTarget = Object.defineProperty(fn.bind(), "prototype", {
    get() {
        ++q;
        return null;
    }
});
for (var i = 0; i < 100; ++i) {
    Reflect.construct(fn, [], newTarget);
}
print(q, 100);
