
function testTestingFunction() {
    let vals = [{}, 1, "foo", null, undefined];
    for (let v of vals) {
        let thrower = () => { throw v; };
        let info = getExceptionInfo(thrower);
        assertEq(info.exception, v);
        assertEq(info.stack.includes("thrower@"), true);
    }

    
    assertEq(getExceptionInfo(() => 123), null);

    
    let info = getExceptionInfo(throwOutOfMemory);
    assertEq(info.exception, "out of memory");
    assertEq(info.stack, null);
}
testTestingFunction();


function testDebuggee() {
    let g = newGlobal({newCompartment: true});
    let dbg = new Debugger(g);
    g.evaluate("(" + function() {
        let thrower = () => { throw 123; };
        for (let i = 0; i < 100; i++) {
            let info = getExceptionInfo(thrower);
            assertEq(info.exception, 123);
            assertEq(info.stack.includes("thrower@"), true);
        }
    } + ")()");
}
testDebuggee();


function testTrustedPrincipals() {
    let g = newGlobal({newCompartment: true, systemPrincipal: true});
    g.evaluate("(" + function() {
        let thrower = () => { throw 123; };
        for (let i = 0; i < 100; i++) {
            let info = getExceptionInfo(thrower);
            assertEq(info.exception, 123);
            assertEq(info.stack.includes("thrower@"), true);
        }
    } + ")()");
}
testTrustedPrincipals();


function testNormal() {
    let g = newGlobal();
    g.evaluate("(" + function() {
        let thrower = () => { throw 123; };
        for (let i = 0; i < 100; i++) {
            let info = getExceptionInfo(thrower);
            assertEq(info.exception, 123);
            
            if (i <= 50) {
                assertEq(info.stack.includes("thrower@"), true);
            } else {
                assertEq(info.stack, null);
            }
        }
    } + ")()");
}
testNormal();
