var exception;
try {
    bar = '2.3023e-320'
    foo = bar.padEnd(2147483620, 1);
    foo(true, 1).value;
} catch (e) {
    exception = e;
}



if (exception.message != "object is not a function."
    && exception != "RangeError: Out of memory")
    throw "FAILED";
