let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);

var count = 0;
function test(string, range) {
    dbg.onNewScript = function (script) {
        ++count;
        print(script.sourceStart, range[0]);
        print(script.sourceLength, range[1]);
    };

    g.eval(string);
};

test("", [0, 0]);
test("2 * 3", [0, 5]);
test("2\n*\n3", [0, 5]);
print(count, 3);
