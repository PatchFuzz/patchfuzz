function f(a, b) {
    this.a = a;
    print(b, 'x');
}

for (var x = 0; x < 9; ++x) {
    f.prototype = {};
    var obj = new f(x, 'x');
    print(obj.a, x);
    print(Object.getPrototypeOf(obj), f.prototype);
}
