function f(a, b, c) {
    this.a = a;
    assertEq(b, 'x');
    assertEq(c, void 0);
}

for (var x = 0; x < 9; ++x) {
    f.prototype = {};
    var obj = new f(x, 'x');  
    assertEq(obj.a, x);
    assertEq(Object.getPrototypeOf(obj), f.prototype);
}
