


let foo = 'let a';
for (let i = 0; i < 400000; i++)
  foo += ',a' + i;

var exception;
try {
    new Function(foo)();
} catch (e) {
    exception = e;
}

if (exception != "RangeError: Maximum call stack size exceeded.")
    throw "FAILED";
