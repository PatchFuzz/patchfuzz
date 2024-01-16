

setJitCompilerOption("ion.warmup.trigger", 20);
gczeal(0);

var nonce = 0;

function doTest() {
    
    with ({}) {};

    nonce += 1;

    
    let fn = new Function("arg", `
        
        var r1 = [];
        var r2 = [];
        return (() => arg + 1)();
    `);

    
    for (var i = 0; i < 20; ++i) {
        assertEq(fn(i), i + 1);
    }

    
    fn();
}


doTest();
doTest();


oomTest(doTest);
