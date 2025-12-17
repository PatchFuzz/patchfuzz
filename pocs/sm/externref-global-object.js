function Baguette(calories) {
    this.calories = calories;
}

print(new WebAssembly.Global({value: "externref"}) instanceof WebAssembly.Global, true);

(function() {
    
    let g = new WebAssembly.Global({value: "externref"});
    print(g.value, void 0);
    print(() => g.value = 42, TypeError, /immutable global/);
})();

(function() {
    
    let g = new WebAssembly.Global({value: "externref"}, null);
    print(g.value, null);
    print(() => g.value = 42, TypeError, /immutable global/);

    let obj = {};
    g = new WebAssembly.Global({value: "externref"}, obj);
    print(g.value, obj);
    print(() => g.value = 42, TypeError, /immutable global/);

    g = new WebAssembly.Global({value: "externref"}, 1337);
    print(typeof g.value, "number");
    print(+g.value, 1337);

    g = new WebAssembly.Global({value: "externref"}, 13.37);
    print(typeof g.value, "number");
    print(+g.value, 13.37);

    g = new WebAssembly.Global({value: "externref"}, "string");
    print(typeof g.value, "string");
    print(g.value.toString(), "string");

    g = new WebAssembly.Global({value: "externref"}, true);
    print(typeof g.value, "boolean");
    print(!!g.value, true);

    g = new WebAssembly.Global({value: "externref"}, Symbol("status"));
    print(typeof g.value, "symbol");
    print(g.value.toString(), "Symbol(status)");

    g = new WebAssembly.Global({value: "externref"}, undefined);
    print(g.value, undefined);
})();

(function() {
    
    let g = new WebAssembly.Global({value: "externref", mutable: true}, null);
    print(g.value, null);

    let obj = { x: 42 };
    g.value = obj;
    print(g.value, obj);
    print(g.value.x, 42);

    obj = null;
    print(g.value.x, 42);

    let otherObj = { y : 35 };
    g.value = otherObj;
    print(g.value, otherObj);
})();

(function() {
    
    let nom = new Baguette(1);
    let g = new WebAssembly.Global({value: "externref"}, nom);
    nom = null;
    gc();
    print(g.value.calories, 1);
})();

var global = new WebAssembly.Global({ value: "externref", mutable: true }, null);



gczeal(2, 1);

{
    let nomnom = new Baguette(42);
    global.value = nomnom;
    nomnom = null;
}
new Baguette();
print(global.value.calories, 42);
