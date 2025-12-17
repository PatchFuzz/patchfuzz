function f(...rest) {
    function nested () {
        return rest;
    }
    return nested;
}
print(f(1, 2, 3)().toString(), [1, 2, 3].toString());