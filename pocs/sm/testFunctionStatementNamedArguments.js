var g;
function foo(b) {
    if (b)
        function arguments() {};
    return arguments;
}

var a = foo(true);
print(typeof a, "function");
print(a.name, "arguments");
