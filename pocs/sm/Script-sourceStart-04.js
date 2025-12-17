let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);

var count = 0;
function test(string, range) {
    dbg.onNewScript = function (script) {
        ++count;
        if (count % 2 == 0) {
            print(script.sourceStart, range[0]);
            print(script.sourceLength, range[1]);
        }
    }

    g.eval(string);
}

test("eval('2 * 3')", [0, 5]);
test("new Function('2 * 3')", [0, 31]);
test("new Function('x', 'x * x')", [0, 32]);
print(count, 6);
