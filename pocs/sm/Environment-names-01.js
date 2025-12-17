var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
g.h = function () {
    var env = dbg.getNewestFrame().environment;
    var names = env.names();
    print(names.indexOf("a") !== -1, true);

    
    
    
    hits++;
};
g.eval("var obj = {a: 1};\n" +
       "Object.defineProperty(obj, 'b', {value: 2});\n" +
       "with (obj) h();");
print(hits, 1);
