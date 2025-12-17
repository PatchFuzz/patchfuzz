function foo(a, b) {
    var s = "foo";
    for (var j = 0; j < 5; j++)
        s += a[b[j]];
    return s;
}

var a = {a:"zero", b:"one", c:"two", d:"three", e:"four"};
var b = ["a", "b", "c", "d", "e"];

for (var i=0; i<9; i++)
    print(foo(a, b), "foozeroonetwothreefour");

a.e = 4;
print(foo(a, b), "foozeroonetwothree4");
