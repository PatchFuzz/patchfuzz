;
;

var p = new Proxy({}, {
    get(target, property) {
        if (property === Symbol.iterator)
            throw "fit";
        return undefined;
    }
});
print(function () { for (var v of p) {} }, "fit");
