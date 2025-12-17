;
print(function () {
    for (var v of Int8Array.prototype)
        throw "FAIL";
}, TypeError);
