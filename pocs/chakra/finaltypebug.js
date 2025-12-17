Object.prototype.foo = function () { return 2; };
function construct(z) {
    if (z) {
        this.a = 1;
    }
    this.b = this.foo();
}
new construct(1);
new construct(1);
var c = new construct(1);
print(c.a);
print(c.b);
