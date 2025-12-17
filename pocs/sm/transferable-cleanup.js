gczeal(0);

function testBasic() {
    const desc = "basic canTransfer, writeTransfer, freeTransfer";
    const BASE = 100;
    const obj = makeSerializable(BASE + 1);
    let s = serialize(obj, [obj]);
    print("" + obj.log, "" + [101, "?", 101, "W"], "serialize " + desc);
    s = null;
    gc();
    print(`serialize ${arguments.callee.name}: ${obj.log}`);
    print("" + obj.log, "" + [
        
        
        101, "?", 101, "W",
        
        101, "F"
    ], "serialize " + desc);
    obj.log = null;
}

function testErrorDuringWrite() {
    const desc = "canTransfer, write=>error";
    const BASE = 200;
    const obj = makeSerializable(BASE + 1);
    const ab = new ArrayBuffer(100);
    detachArrayBuffer(ab);
    try {
        serialize([obj, ab], [obj]);
    } catch (e) {
    }
    gc();
    print(`${arguments.callee.name}: ${obj.log}`);
    print("" + obj.log, "" + [201, "?"], desc);
    obj.log = null;
}

function testErrorDuringTransfer() {
    const desc = "canTransfer, write(ab), writeTransfer(obj), writeTransfer(ab)=>error, freeTransfer";
    const BASE = 300;
    const obj = makeSerializable(BASE + 1);
    const ab = new ArrayBuffer(100);
    detachArrayBuffer(ab);
    try {
        serialize([obj, ab], [obj, ab]);
    } catch (e) {
    }
    gc();
    print(`${arguments.callee.name}: ${obj.log}`);
    print("" + obj.log, "" + [
        
        301, "?", 301, "W",
        
        301, "F"
    ], desc);
    obj.log = null;
}

function testMultiOkHelper(g, BASE, desc) {
    const obj = makeSerializable(BASE + 1);
    const obj2 = makeSerializable(BASE + 2);
    const obj3 = makeSerializable(BASE + 3);
    serialize([obj, obj2, obj3], [obj, obj3]);
    gc();
    print(`${arguments.callee.name}(${BASE}): ${obj.log}`);
    print("" + obj.log, "" + [
        
        BASE + 1, "?", BASE + 3, "?",
        
        BASE + 2, "w",
        
        BASE + 1, "W", BASE + 3, "W",
        
        BASE + 1, "F", BASE + 3, "F"
    ], desc);
    obj.log = null;
}

function testMultiOk() {
    const desc = "write 3 objects, transfer obj1 and obj3 only, write obj2";
    testMultiOkHelper(globalThis, 400, desc);
}

function testMultiOkCrossRealm() {
    const desc = "write 3 objects, transfer obj1 and obj2 only, cross-realm";
    testMultiOkHelper(newGlobal({ newCompartment: true }), 500, desc);
}

function printTrace(callee, global, base, log, phase = undefined) {
    phase = phase ? `${phase} ` : "";
    const test = callee.replace("Helper", "") + (global === globalThis ? "" : "CrossRealm");
    print(`${phase}${test}(${base}): ${log}`);
}

function testMultiOkWithDeserializeHelper(g, BASE, desc) {
    const obj = makeSerializable(BASE + 1);
    const obj2 = makeSerializable(BASE + 2);
    const obj3 = makeSerializable(BASE + 3);
    let s = serialize([obj, obj2, obj3], [obj, obj3]);
    gc();
    printTrace(arguments.callee.name, g, BASE, obj.log, "serialize");
    print("" + obj.log, "" + [
        
        BASE + 1, "?", BASE + 3, "?",
        
        BASE + 2, "w",
        
        BASE + 1, "W", BASE + 3, "W",
        
    ], "serialize " + desc);
    obj.log = null;

    let clone = deserialize(s);
    s = null;
    gc();
    printTrace(arguments.callee.name, g, BASE, obj.log, "deserialize");
    print("" + obj.log, "" + [
        
        BASE + 1, "R", BASE + 3, "R",
        
        BASE + 2, "r",
    ], "deserialize " + desc);
    obj.log = null;
}

function testMultiOkWithDeserialize() {
    const desc = "write 3 objects, transfer obj1 and obj3 only, write obj2, deserialize";
    testMultiOkWithDeserializeHelper(globalThis, 600, desc);
}

function testMultiOkWithDeserializeCrossRealm() {
    const desc = "write 3 objects, transfer obj1 and obj2 only, deserialize, cross-realm";
    testMultiOkWithDeserializeHelper(newGlobal({ newCompartment: true }), 700, desc);
}

function testMultiWithDeserializeReadTransferErrorHelper(g, BASE, desc) {
    const obj = makeSerializable(BASE + 1, 0);
    const obj2 = makeSerializable(BASE + 2, 1);
    const obj3 = makeSerializable(BASE + 3, 1);
    let s = serialize([obj, obj2, obj3], [obj, obj3]);
    gc();
    printTrace(arguments.callee.name, g, BASE, obj.log, "serialize");
    print("" + obj.log, "" + [
        
        BASE + 1, "?", BASE + 3, "?",
        BASE + 2, "w",
        BASE + 1, "W", BASE + 3, "W",
    ], "serialize " + desc);
    obj.log = null;

    try {
        let clone = deserialize(s);
        print(true, false, "should throw");
    } catch (e) {
        print(e.message.includes("invalid transferable"), true);
    }

    try {
        
        
        let clone = deserialize(s);
    } catch (e) {
        print(e.message.includes("cannot transfer twice"), true);
    }

    s = null;
    gc();
    printTrace(arguments.callee.name, g, BASE, obj.log, "deserialize");
    print("" + obj.log, "" + [
        
        BASE + 1, "R", BASE + 3, "R",
        
        
        
        
        
        BASE + 3, "F",
    ], "deserialize " + desc);
    obj.log = null;
}

function testMultiWithDeserializeReadTransferError() {
    const desc = "write 3 objects, transfer obj1 and obj3 only, fail during readTransfer(obj3)";
    testMultiWithDeserializeReadTransferErrorHelper(globalThis, 800, desc);
}

function testMultiWithDeserializeReadTransferErrorCrossRealm() {
    const desc = "write 3 objects, transfer obj1 and obj2 only, fail during readTransfer(obj3), cross-realm";
    testMultiWithDeserializeReadTransferErrorHelper(newGlobal({ newCompartment: true }), 900, desc);
}

function testMultiWithDeserializeReadErrorHelper(g, BASE, desc) {
    const obj = makeSerializable(BASE + 1, 2);
    const obj2 = makeSerializable(BASE + 2, 2);
    const obj3 = makeSerializable(BASE + 3, 2);
    let s = serialize([obj, obj2, obj3], [obj, obj3]);
    gc();
    printTrace(arguments.callee.name, g, BASE, obj.log, "serialize");
    print("" + obj.log, "" + [
        
        BASE + 1, "?", BASE + 3, "?",
        BASE + 2, "w",
        BASE + 1, "W", BASE + 3, "W",
    ], "serialize " + desc);
    obj.log = null;

    try {
        let clone = deserialize(s);
    } catch (e) {
        print(e.message.includes("Failed as requested"), true);
    }
    s = null;
    gc();
    printTrace(arguments.callee.name, g, BASE, obj.log, "deserialize");
    print("" + obj.log, "" + [
        
        
        
        
        
        BASE + 1, "R", BASE + 3, "R",
        BASE + 2, "r",
    ], "deserialize " + desc);
    obj.log = null;
}

function testMultiWithDeserializeReadError() {
    const desc = "write 3 objects, transfer obj1 and obj3 only, fail during read(obj2)";
    testMultiWithDeserializeReadErrorHelper(globalThis, 1000, desc);
}

function testMultiWithDeserializeReadErrorCrossRealm() {
    const desc = "write 3 objects, transfer obj1 and obj2 only, fail during read(obj2), cross-realm";
    testMultiWithDeserializeReadErrorHelper(newGlobal({ newCompartment: true }), 1100, desc);
}

function testCorruptedTransferMapHeader() {
    const ab = new ArrayBuffer(100);
    const s = serialize({ ab, seven: 7 }, [ab], { scope: "DifferentProcess" });
    const ia = new Int32Array(s.arraybuffer);
    ia[2] = 4; 
    s.arraybuffer = ia.buffer;
    try {
        deserialize(s);
        print(true, false, "should throw for invalid TM header");
    } catch (e) {
        print(e.message.includes("invalid transfer map header"), true);
    }
    ia[2] = -1; 
    s.arraybuffer = ia.buffer;
    try {
        deserialize(s);
        print(true, false, "should throw for invalid TM header");
    } catch (e) {
        print(e.message.includes("invalid transfer map header"), true);
    }
}

testBasic();
testErrorDuringWrite();
testErrorDuringTransfer();
testMultiOk();
testMultiOkCrossRealm();
testMultiOkWithDeserialize();
testMultiOkWithDeserializeCrossRealm();
testMultiWithDeserializeReadTransferError();
testMultiWithDeserializeReadTransferErrorCrossRealm();
testMultiWithDeserializeReadError();
testMultiWithDeserializeReadErrorCrossRealm();
testCorruptedTransferMapHeader();
