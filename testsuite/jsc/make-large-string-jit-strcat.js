



var s = "s";

function foo(a, b) {
    return "t" + a + b;
}

noInline(foo);

for (var i = 0; i < 100000; ++i)
    foo("a", "b");

try {
    for (var i = 0; i < 31; ++i)
        s = foo(s, s);
    print("Should not have gotten here.");
    print("String length: " + s.length);
    throw "Should not have gotten here.";
} catch (e) {
    if (e.message != "Out of memory")
        throw "Wrong error: " + e;
}
