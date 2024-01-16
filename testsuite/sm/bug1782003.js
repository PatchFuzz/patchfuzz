function getStack() {
    enableGeckoProfiling();
    let stack = readGeckoProfilingStack();
    
    
    
    assertEq(stack.length > 0, true);
    assertEq(stack.length <= 3, true);
    assertEq(JSON.stringify(stack).includes('"testFun ('), true);
    disableGeckoProfiling();
}
function testFun() {
    
    while (true) {
        let isJitFrame = inJit();
        if (typeof isJitFrame === "string") {
            return; 
        }
        if (isJitFrame) {
            break;
        }
    }

    
    getStack();
    getStack();
}
testFun();
