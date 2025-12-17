function g() { print(false, true) }
var ct = 0;

function f(b) {
    var a = arguments;
    if (b)
        f(false);
    else
        g = {
            apply:function(x,y) {
                ++ct;
                print(x, null);
                print(typeof y[0], "boolean");
            }
        };
    g.apply(null, a);
}
f(true);
print(ct, 2);
