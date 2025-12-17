function __f_4() {
    return arguments;
}

arr = [];
arr.length = 65526;

print(() => __f_4.bind(null,...arr),
             RangeError,
             "Too many arguments in function call (only 65525 allowed)");
