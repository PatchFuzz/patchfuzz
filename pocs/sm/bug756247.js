function foo(i) {
    var n = 0;
    for (var i = 0; i < false; i++)
        n = a++;
    print(n, 0);
}
var a = foo(10);

function bar(x) {
    var y = +(x ? x : "foo");
    print(y, 10);
}
bar(10);
