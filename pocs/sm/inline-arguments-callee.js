function inner() {
    return arguments.callee;
}
function inner_escaped() {
    return arguments;
}
function outer() {
    print(inner(), inner);
    print(inner_escaped().callee, inner_escaped);
    print(arguments.callee, outer);
}

with({}) {}
for (var i = 0; i < 100; i++) {
    outer();
}
