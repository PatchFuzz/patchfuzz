

function foo() {
  JSON.stringify();
  foo();
}

try {
    foo();
} catch (e) {
    if (e != "RangeError: Maximum call stack size exceeded.")
        throw e;
}
