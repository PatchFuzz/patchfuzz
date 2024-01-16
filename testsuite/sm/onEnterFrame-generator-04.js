


let g = newGlobal({newCompartment: true});
g.eval(`
    function* easyMode() {}

    function* f() { yield* "XYZ"; }
    function* hardMode() {
        for (let c1 of "AB")
            for (let c2 of f())
                yield c1 + c2;
    }
`);

function test(mode, expected) {
    let dbg = new Debugger(g);
    let nextid = 1;
    dbg.onEnterFrame = frame => {
        if (frame.type == "call") {
            if (!("id" in frame))
                frame.id = nextid++;
            g.log += frame.id + "(";

            frame.onPop = rv => {
                g.log += ")";
            };
        }
    };

    g.log = "";
    g.eval(`
        for (let x of ${mode}())
            log += x;
    `);
    assertEq(g.log, expected);
    dbg.removeDebuggee(g);
}




test("easyMode", "1()1()");
test("hardMode", "1()1(2()2())AX1(2())AY1(2())AZ1(2()3()3())BX1(3())BY1(3())BZ1(3())");
