var g = newGlobal();
var mw = g.eval("new Map([['a', 1], ['b', 2]])");
var log = '';
for (let [k, v] of mw)
    log += k + v;
print(log, "a1b2");
