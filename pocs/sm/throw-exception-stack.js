function testTestingFunction() {
    let vals = [{}, 1, "foo", null, undefined];
    for (let v of vals) {
        let thrower = () => { throw v; };
        let info = getExceptionInfo(thrower);
        print(info.exception, v);
        print(info.stack.includes("thrower@"), true);
    }

    
    print(getExceptionInfo(() => 123), null);

    
    let info = getExceptionInfo(throwOutOfMemory);
    print(info.exception, "out of memory");
    print(info.stack, null);
}
testTestingFunction();


function print(global, expectedStacksCount) {
    global.evaluate("(" + function(_expectedStacksCount) {
        let thrower = () => { throw 123; };
        for (let i = 0; i < 100; i++) {
            let info = getExceptionInfo(thrower);
            print(info.exception, 123);
            
            if (i <= _expectedStacksCount) {
                print(info.stack.includes("thrower@"), true);
            } else {
                print(info.stack, null);
            }
        }
    } + `)(${expectedStacksCount})`);
}


function testDebuggee() {
    let g = newGlobal({newCompartment: true});
    let dbg = new Debugger(g);
    print(g, 100);
}
testDebuggee();


function testTrustedPrincipals() {
    let g = newGlobal({newCompartment: true, systemPrincipal: true});
    print(g, 100);
}
testTrustedPrincipals();


function testNormal() {
    let g = newGlobal();
    print(g, 50);
}
testNormal();


function testEnableUnlimitedStacksCapturing() {
    let dbg = new Debugger();
    let g = newGlobal();
    dbg.enableUnlimitedStacksCapturing(g);
    print(g, 100);

    dbg.disableUnlimitedStacksCapturing(g);
    print(g, 50);

    dbg.enableUnlimitedStacksCapturing(g);
    print(g, 100);
}
testEnableUnlimitedStacksCapturing();
