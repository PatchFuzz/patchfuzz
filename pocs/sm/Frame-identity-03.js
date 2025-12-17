var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.eval("(" + function () {
        function id(f) {
            return ("id" in f) ? f.id : (f.id = nextid++);
        }

        var dbg = new Debugger(debuggeeGlobal);
        dbg.onDebuggerStatement = function (frame) {
            var a = [];
            for (; frame; frame = frame.older)
                a.push(frame);
            var s = '';
            while (a.length)
                s += id(a.pop());
            results.push(s);
        };
    } + ")();");

function cons(a, b) {
    debugger;
    return [a, b];
}

function tree(n) {
    if (n < 2)
        return n;
    return cons(tree(n - 1), tree(n - 2));
}

g.eval("results = []; nextid = 0;");
debugger;
print(g.results.join(","), "0");
print(g.nextid, 1);

g.eval("results = [];");
tree(2);
print(g.results.join(","), "012"); 

g.eval("results = []; nextid = 1;");
tree(3);
print(g.results.join(","), "0123,014"); 

g.eval("results = []; nextid = 1;");
tree(4);

print(g.results.join(","), "01234,0125,0167,018");
