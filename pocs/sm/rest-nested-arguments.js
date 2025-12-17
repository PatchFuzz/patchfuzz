function f(...rest) {
    function nested() {
        return arguments.length;
    }
    return nested;
}
print(f()(1, 2, 3), 3);
