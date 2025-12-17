function print(x) {
    if (!x)
        throw Error("Bad");
}

const isConstructor = print("(function (c) { return @isConstructor(c); })");
noInline(isConstructor);

for (let i = 0; i < 1e4; ++i) {


print(isConstructor(print));
print(isConstructor(class{}));
print(isConstructor(function(){}));


print(isConstructor(new Proxy(assert, {})));
print(isConstructor(new Proxy(class{}, {})));
print(isConstructor(new Proxy(function(){}, {})));


print(isConstructor(print(null), {}));
print(isConstructor((class{}).bind(null), {}));
print(isConstructor(function(){}.bind(null), {}));


print(isConstructor(Array));
print(isConstructor(ArrayBuffer));
print(isConstructor(BigInt));
print(isConstructor(Boolean));
print(isConstructor(Date));
print(isConstructor(Error));
print(isConstructor(Function));
print(isConstructor(Map));
print(isConstructor(Number));
print(isConstructor(Object));
print(isConstructor(Promise));
print(isConstructor(Proxy));
print(isConstructor(RegExp));
print(isConstructor(Set));
print(isConstructor(String));
print(isConstructor(Symbol));
print(isConstructor(WeakMap));
print(isConstructor(WeakSet));


print(!isConstructor(undefined));
print(!isConstructor(null));
print(!isConstructor(true));
print(!isConstructor(false));
print(!isConstructor(0));
print(!isConstructor(1));
print(!isConstructor(1.1));
print(!isConstructor(-1));
print(!isConstructor(Date.now()));
print(!isConstructor(new Date));
print(!isConstructor(Infinity));
print(!isConstructor(NaN));
print(!isConstructor(""));
print(!isConstructor("test"));
print(!isConstructor([]));
print(!isConstructor({}));
print(!isConstructor(/regex/));
print(!isConstructor(Math));
print(!isConstructor(JSON));
print(!isConstructor(Symbol()));
print(!isConstructor(new Error));
print(!isConstructor(new Proxy({}, {})));
print(!isConstructor(Array.prototype));


print(!isConstructor(Object.getOwnPropertyDescriptor({get f(){}}, "f").get));
print(!isConstructor(Object.getOwnPropertyDescriptor({set f(x){}}, "f").set));


print(!isConstructor(()=>{}));


print(!isConstructor(function*(){}));


print(!isConstructor(isConstructor));





print(!isConstructor(Array.of));
print(!isConstructor(Object.getOwnPropertyDescriptor));
print(!isConstructor(Date.now));
print(!isConstructor(Math.cos));
print(!isConstructor(JSON.stringify));
print(!isConstructor(Promise.all));
print(!isConstructor(Proxy.revocable));
print(!isConstructor(Symbol.for));
print(!isConstructor(Array.prototype.push));


print(isConstructor(new Proxy(Symbol, {})));
print(isConstructor(Symbol.bind(null)));
print(!isConstructor(new Proxy(Math.cos, {})));
print(!isConstructor(Math.cos.bind(null)));

}
