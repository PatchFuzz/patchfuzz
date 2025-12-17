function L(scope) { this.s = new Object(); }

L.prototype.c = function() { return true; }

function F() {
  this.l = [new L, new L];
}

F.prototype.foo = function () {
    var f, d = arguments,
        e, b = this.l,
        g;
    for (e = 0; e < b.length; e++) {
        g = b[e];
        f = g.c.apply(g.s, d);
        if (f === false) {
            break
        }
    }
    return f
}


var ctx = new F;

%PrepareFunctionForOptimization(F.prototype.foo);
for (var i = 0; i < 5; i++) ctx.foo();
%OptimizeFunctionOnNextCall(F.prototype.foo);
ctx.foo();
