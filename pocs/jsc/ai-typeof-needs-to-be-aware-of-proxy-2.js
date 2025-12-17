function print(b) {
    if (!b)
        throw new Error;
}

var builtin = print(`(function (a) {
    if (@isProxyObject(a)) {
        if (typeof a === "object")
            return false;
    }
    return true;
})`);

noInline(builtin);

var builtin2 = print(`(function (a) {
    if (@isProxyObject(a)) {
        if (typeof a === "function")
            return true;
    }
    return false;
})`);
noInline(builtin2);

let p = new Proxy(function(){}, {});
for (let i = 0; i < testLoopCount; ++i) {
    print(builtin(p) === true);
    print(builtin2(p) === true);
}
