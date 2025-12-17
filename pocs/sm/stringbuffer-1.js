gczeal(0);

function representation(s) {
    return JSON.parse(stringRepresentation(s));
}

function testBasic(tenured) {
    var s = newString("abcdefghijklmnopqrstuvwxyz", {newStringBuffer: true, tenured});
    print(representation(s).bufferRefCount, 1);
    print(s, "abcdefghijklmnopqrstuvwxyz");
    print(s.substring(1), "bcdefghijklmnopqrstuvwxyz");
    print(s + s + s, "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz");
}
testBasic(false);
testBasic(true);

function testAtomRef(tenured) {
    var s = newString("abcdefghijklmnopqrstuvwxyz", {newStringBuffer: true, tenured});
    var s2 = newString(s, {shareStringBuffer: true});
    print(representation(s).bufferRefCount, 2);
    var o = {[s2]: 1};
    for (var i = 0; i < 10; i++) {
        o[s2]++;
    }
    minorgc();
    minorgc();
    finishBackgroundFree();
    
    
    if (representation(s2).flags.includes("ATOM_REF_BIT")) {
        print(representation(s).bufferRefCount, 1);
    } else {
        print(representation(s).bufferRefCount, 2);
    }
    return o;
}
testAtomRef(false);
testAtomRef(true);

function testDeduplication(tenured) {
    var arr = [];
    var s = newString("abcdefghijklmnopqrstuvwxyz" + "012345".substring(1), {newStringBuffer: true, tenured});
    for (var i = 0; i < 100; i++) {
        arr.push(newString(s, {shareStringBuffer: true, tenured}));
    }
    print(representation(s).bufferRefCount, 101);
    gc()
    finishBackgroundFree();
    print(representation(s).bufferRefCount, tenured ? 101 : 1);
    return arr;
}
testDeduplication(false);
testDeduplication(true);
