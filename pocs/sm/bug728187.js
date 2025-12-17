function f(x) {
    if (x.y()) {};
}
f({y: function() {}});
try {
    f(10);
    print(0, 1);
} catch(e) {
    print(e instanceof TypeError, true);
}
