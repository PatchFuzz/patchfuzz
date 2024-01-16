function assert(x) {
    if (!x)
        throw Error("Bad");
}

const isConstructor = $vm.createBuiltin("(function (c) { return @isConstructor(c); })");
noInline(isConstructor);

for (let i = 0; i < 1e4; ++i) {


assert(isConstructor(assert));
assert(isConstructor(class{}));
assert(isConstructor(function(){}));


assert(isConstructor(new Proxy(assert, {})));
assert(isConstructor(new Proxy(class{}, {})));
assert(isConstructor(new Proxy(function(){}, {})));


assert(isConstructor(assert.bind(null), {}));
assert(isConstructor((class{}).bind(null), {}));
assert(isConstructor(function(){}.bind(null), {}));


assert(isConstructor(Array));
assert(isConstructor(ArrayBuffer));
assert(isConstructor(BigInt));
assert(isConstructor(Boolean));
assert(isConstructor(Date));
assert(isConstructor(Error));
assert(isConstructor(Function));
assert(isConstructor(Map));
assert(isConstructor(Number));
assert(isConstructor(Object));
assert(isConstructor(Promise));
assert(isConstructor(Proxy));
assert(isConstructor(RegExp));
assert(isConstructor(Set));
assert(isConstructor(String));
assert(isConstructor(Symbol));
assert(isConstructor(WeakMap));
assert(isConstructor(WeakSet));


assert(!isConstructor(undefined));
assert(!isConstructor(null));
assert(!isConstructor(true));
assert(!isConstructor(false));
assert(!isConstructor(0));
assert(!isConstructor(1));
assert(!isConstructor(1.1));
assert(!isConstructor(-1));
assert(!isConstructor(Date.now()));
assert(!isConstructor(new Date));
assert(!isConstructor(Infinity));
assert(!isConstructor(NaN));
assert(!isConstructor(""));
assert(!isConstructor("test"));
assert(!isConstructor([]));
assert(!isConstructor({}));
assert(!isConstructor(/regex/));
assert(!isConstructor(Math));
assert(!isConstructor(JSON));
assert(!isConstructor(Symbol()));
assert(!isConstructor(new Error));
assert(!isConstructor(new Proxy({}, {})));
assert(!isConstructor(Array.prototype));


assert(!isConstructor(Object.getOwnPropertyDescriptor({get f(){}}, "f").get));
assert(!isConstructor(Object.getOwnPropertyDescriptor({set f(x){}}, "f").set));


assert(!isConstructor(()=>{}));


assert(!isConstructor(function*(){}));


assert(!isConstructor(isConstructor));





assert(!isConstructor(Array.of));
assert(!isConstructor(Object.getOwnPropertyDescriptor));
assert(!isConstructor(Date.now));
assert(!isConstructor(Math.cos));
assert(!isConstructor(JSON.stringify));
assert(!isConstructor(Promise.all));
assert(!isConstructor(Proxy.revocable));
assert(!isConstructor(Symbol.for));
assert(!isConstructor(Array.prototype.push));


assert(isConstructor(new Proxy(Symbol, {})));
assert(isConstructor(Symbol.bind(null)));
assert(!isConstructor(new Proxy(Math.cos, {})));
assert(!isConstructor(Math.cos.bind(null)));

}
