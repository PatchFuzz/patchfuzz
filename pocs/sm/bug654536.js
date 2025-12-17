function f() {
    var x = Object.prototype.hasOwnProperty.call(1);
    print(x, false);
    isNaN(2);
}
f();
