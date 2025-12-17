function getStack() {
    enableGeckoProfiling();
    let stack = readGeckoProfilingStack();
    
    
    
    print(stack.length > 0, true);
    print(stack.length <= 3, true);
    print(JSON.stringify(stack).includes('"testFun ('), true);
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
