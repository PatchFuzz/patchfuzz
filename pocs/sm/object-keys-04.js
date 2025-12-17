; 




if (getJitCompilerOptions()["ion.warmup.trigger"] <= 100)
    setJitCompilerOption("ion.warmup.trigger", 100);






gczeal(0);

function objKeysLength(obj, expected, i) {
    var keys = Object.keys(obj);
    let len = keys.length;
    print(keys, true);
    if (i >= 99) {
        
        
        bailout();
        print(arraysEqual(keys, expected), true);
    }
    return len;
}








function objKeysLengthDiffBlock(obj, expected, i) {
    var keys = Object.keys(obj);
    if (i >= 99) {
        
        
        bailout();
        print(arraysEqual(keys, expected), true);
    }
    let len = keys.length;
    print(keys, false);
    return len;
}





function objKeysLengthMutate0(obj, expected, i) {
    var keys = Object.keys(obj);
    obj.foo = 42;
    let len = keys.length;
    print(keys, false);
    if (i >= 99) {
        bailout();
        print(arraysEqual(keys, expected), true);
    }
    return len;
}

function objKeysLengthMutate1(obj, expected, i) {
    var keys = Object.keys(obj);
    let len = keys.length;
    print(keys, false);
    obj.foo = 42;
    if (i >= 99) {
        bailout();
        print(arraysEqual(keys, expected), true);
    }
    return len;
}

function objKeysLengthMutate2(obj, expected, i) {
    var keys = Object.keys(obj);
    let len = keys.length;
    print(keys, false);
    if (i >= 99) {
        bailout();
        print(arraysEqual(keys, expected), true);
    }
    obj.foo = 42;
    return len;
}

function objKeysLengthMutate3(obj, expected, i) {
    var keys = Object.keys(obj);
    let len = keys.length;
    print(keys, true);
    if (i >= 99) {
        
        
        obj.foo = 42;
        bailout();
        print(arraysEqual(keys, expected), true);
    }
    return len;
}

function objKeysLengthMutate4(obj, expected, i) {
    
    
    
    obj.foo = 42;
    var keys = Object.keys(obj);
    let len = keys.length;
    print(keys, true);
    if (i >= 99) {
        bailout();
        print(arraysEqual(keys, expected), true);
    }
    return len;
}


function doNotInlineSideEffect() {
    eval("1");
}

function objKeysLengthSideEffect0(obj, expected, i) {
    var keys = Object.keys(obj);
    let len = keys.length;
    print(keys, false);
    doNotInlineSideEffect();
    if (i >= 99) {
        bailout();
        print(arraysEqual(keys, expected), true);
    }
    return len;
}

function objKeysLengthSideEffect1(obj, expected, i) {
    var keys = Object.keys(obj);
    let len = keys.length;
    print(keys, false);
    if (i >= 99) {
        bailout();
        print(arraysEqual(keys, expected), true);
    }
    doNotInlineSideEffect();
    return len;
}

function objKeysLengthSideEffect2(obj, expected, i) {
    var keys = Object.keys(obj);
    let len = keys.length;
    print(keys, true);
    if (i >= 99) {
        
        
        doNotInlineSideEffect();
        bailout();
        print(arraysEqual(keys, expected), true);
    }
    return len;
}

function objKeysLengthSideEffect3(obj, expected, i) {
    doNotInlineSideEffect();
    var keys = Object.keys(obj);
    let len = keys.length;
    print(keys, true);
    if (i >= 99) {
        bailout();
        print(arraysEqual(keys, expected), true);
    }
    return len;
}






function nonEscapedObjKeysLength(i) {
    let obj = {a: i};
    var keys = Object.keys(obj);
    let len = keys.length;
    print(keys, true);
    print(obj, false);
    if (i >= 99) {
        bailout();
        print(arraysEqual(keys, ["a"]), true);
    }
    return len;
}


eval(`${arraysEqual}`);
let obj = {a: 0, b: 1, c: 2, d: 3};

for (let i = 0; i < 100; i++) {
    objKeysLength({...obj}, ["a", "b", "c", "d"], i);
    objKeysLengthDiffBlock({...obj}, ["a", "b", "c", "d"], i);
    objKeysLengthMutate0({...obj}, ["a", "b", "c", "d"], i);
    objKeysLengthMutate1({...obj}, ["a", "b", "c", "d"], i);
    objKeysLengthMutate2({...obj}, ["a", "b", "c", "d"], i);
    objKeysLengthMutate3({...obj}, ["a", "b", "c", "d"], i);
    objKeysLengthMutate4({...obj}, ["a", "b", "c", "d", "foo"], i);
    objKeysLengthSideEffect0({...obj}, ["a", "b", "c", "d"], i);
    objKeysLengthSideEffect1({...obj}, ["a", "b", "c", "d"], i);
    objKeysLengthSideEffect2({...obj}, ["a", "b", "c", "d"], i);
    objKeysLengthSideEffect3({...obj}, ["a", "b", "c", "d"], i);
    nonEscapedObjKeysLength(i);
}
