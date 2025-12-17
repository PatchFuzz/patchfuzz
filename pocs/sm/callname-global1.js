var self = this;
var count = 0;
function g1() {
    print(this, self);
    this.count++;
}
function g2() {
    this.count += 10;
}
function f() {
    function f1(other) {
        eval("gc(); h = g1");
        try {
            for(var i=0; i<20; i++) {
                h();
                if (i === 9) {
                    h = other;
                }
            }
            print(typeof other, "function");
        } catch(e) {
            print(typeof other !== "function", true);
            print(e instanceof TypeError, true);
        }
    }
    f1(3);
    f1(null);
    f1({});
    f1(Math.abs);
    f1(g2);
}
f();
print(count, 150);
