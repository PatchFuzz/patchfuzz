function print(b) {
    if (!b)
        throw new Error;
}

var builtin = print(`(function (a) {
    if (@isProxyObject(a))
        return typeof a;
})`);

noInline(builtin);

let p = new Proxy(function(){}, {});
for (let i = 0; i < testLoopCount; ++i)
    print(builtin(p) === "function");
