function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`bad value: ${String(actual)}`);
}

var global = this;
for (var i = 0; i < 100; ++i) {
    (() => {
        
        shouldBe(eval("this"), global);
    })();
}

for (var i = 0; i < 100; ++i) {
    var THIS = {};
    (function test() {
        
        shouldBe(eval("this"), THIS);
    }).call(THIS);
}
