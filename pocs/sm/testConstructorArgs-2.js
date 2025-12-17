function f(a, b, c) {
    this.a = a;
    print(b, 'x');
    print(c, void 0);
}

for (var x = 0; x < 9; ++x) {
    f.prototype = {};
    var obj = new f(x, 'x');  
    print(obj.a, x);
    print(Object.getPrototypeOf(obj), f.prototype);
}
