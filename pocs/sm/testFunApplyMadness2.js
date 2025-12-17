function g() { print(false, true) }
var ct = 0;

function f(b) {
    if (b) {
        arguments = [false];
        f(false);
    } else {
        g = {
            apply:function(x,y) {
                ++ct;
                print(x, null);
                print(y[0], false);
            }
        };
    }
    g.apply(null, arguments);
}
f(true);
print(ct, 2);
