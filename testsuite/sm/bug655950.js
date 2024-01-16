


function f() {
    try {
        (new {
            x: function() {}
        }.x)();
    } catch (e) {}
}
for (var i = 0; i<10000; i++) {
    f();
}
