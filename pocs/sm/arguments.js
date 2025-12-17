function f() {
    var args = arguments, r;

    for (var i = 0; i < args.length; i++)
        r = args[i];

    return r;
}

print(f.apply(null, [1, 2, 3, 4, 5, 6]), 6)
print(f.apply(null, [1, 2, 3, 4, 5]), 5)
print(f.apply(null, [1, 2, 3, 4]), 4)

function g(arg) {
    var r;
    for (var i = 0; i < arg.length; i++)
        r = arg[i];
    return r;
}

print(g((function () { return arguments; }).call(null, 1, 2, 3)), 3);
print(g(new Float32Array(3)), 0.0);
print(g([1, 2, 3, 4]), 4);
