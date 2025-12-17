let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);

var text;
var count = 0;
dbg.onNewScript = function (script) {
    ++count;
    if (count % 2 == 0)
        print(script.source.text, text);
}

g.eval("eval('" + (text = "") + "')");
g.eval("eval('" + (text = "2 * 3") + "')");


text = "function anonymous(\n) {\n\n}";
g.eval("new Function('')");

text = "function anonymous(a,b\n) {\nc\n}";
g.eval("new Function('a', 'b', 'c')");

text = "function anonymous(d\n,e\n) {\nf\n}";
g.eval("new Function('d\\n', 'e', 'f')");

evaluate("", { global: g });
text = "2 * 3";
evaluate("2 * 3", { global: g });
print(count, 12);
