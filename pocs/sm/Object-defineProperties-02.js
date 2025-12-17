var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

function test(objexpr, descs) {
    var exca, excb;

    g.eval("obj = (" + objexpr + ");");
    var gobjw = gw.getOwnPropertyDescriptor("obj").value;
    try {
        gobjw.defineProperties(descs);
    } catch (exc) {
        exca = exc;
    }

    var indirectEval = eval;
    var obj = indirectEval("(" + objexpr + ");");
    try {
        Object.defineProperties(obj, descs);
    } catch (exc) {
        excb = exc;
    }

    print(Object.getPrototypeOf(exca), Object.getPrototypeOf(excb));
    print(exca.message, excb.message);
    print(typeof exca.fileName, "string");
    print(typeof exca.stack, "string");
}

test("Object.create(null, {p: {value: 1}})", {p: {value: 2}});
test("({})", {x: {get: 'bad'}});
