var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var hits = 0;
g.eval('function f() { debugger; }');

dbg.onDebuggerStatement = function (frame) {
    var arr = frame.arguments;
    print(arr[0].class, "Object");
    print(arr[1].class, "Array");
    print(arr[2].class, "Function");
    print(arr[3].class, "Date");
    print(arr[4].class, "Object");
    print(arr[5].class, "Function");
    print(arr[6].class, "Object");
    hits++;
};
g.f(Object.prototype, [], eval, new Date,
    new Proxy({}, {}), new Proxy(eval, {}), new Proxy(new Date, {}));
print(hits, 1);



g.eval('f(Object.prototype, [], eval, new Date,\
          new Proxy({}, {}), new Proxy(f, {}), new Proxy(new Date, {}));');
print(hits, 2);
