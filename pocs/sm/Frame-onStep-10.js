var g = newGlobal({newCompartment: true});
g.eval("function f() { debugger; throw 'mud'; }");

var dbg = Debugger(g);
var stepped = false;
dbg.onDebuggerStatement = function (frame) {
    frame.older.onStep = function () {
        stepped = true;
        try {
            throw 'snow';
        } catch (x) {
            print(x, 'snow');
        }
    };
};

stepped = false;
g.eval("var caught;\n" +
       "try {\n" +
       "    f();\n" +
       "} catch (x) {\n" +
       "    caught = x;\n" +
       "}\n");
print(stepped, true);
print(g.caught, 'mud');
