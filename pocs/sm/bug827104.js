function f() {
    var a = [];
    for (var i = 0; i < 1000; i++) {
      a.x = {}
    }
    a[i][0] = 0;
}

var e;
try {
    f();
} catch (error) {e = error;}
print(e.constructor.name, "TypeError");
print(e.message.includes("a[i] is undefined"), true);
