print("./resources/v8-mjsunit.js", "caller relative");

let called = false;
let reentrant_gc = function(holdings) {
    gc();
    called = true;
}

let fg = new FinalizationRegistry(reentrant_gc);

(function() {
    for (let i = 0; i < 10; ++i)
        fg.register(Symbol(), 42);
})();

gc();

setTimeout(function() {
    print(called);
}, 0);
