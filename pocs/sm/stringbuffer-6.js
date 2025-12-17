gczeal(0);


const StringBufferSizeInBytes = 8;

function checkRefCount(s, expected) {
    
    
    if (getBuildConfiguration("debug")) {
        finishBackgroundFree();
        var repr = JSON.parse(stringRepresentation(s));
        print(repr.bufferRefCount, expected);
    }
}
function checkExtensibleCapacity(s, expected) {
    if (getBuildConfiguration("debug")) {
        var repr = JSON.parse(stringRepresentation(s));
        print(repr.capacity, expected);
    }
}

function testBasicLatin1() {
    var s1 = ensureLinearString("a".repeat(1000));
    var s2 = ensureLinearString("b".repeat(1000));
    var flattened1 = ensureLinearString(newRope(s1, s2));
    checkRefCount(flattened1, 1);
    
    
    var expectedCapacity = 2048 - StringBufferSizeInBytes - 1 ;
    checkExtensibleCapacity(flattened1, expectedCapacity);

    
    var flattened2 = ensureLinearString(flattened1 + "abcdef");
    checkRefCount(flattened1, undefined);
    checkRefCount(flattened2, 1);
    print(flattened2.length, 2006);

    
    var sharedBuffer = newString(flattened2, {shareStringBuffer: true});
    checkRefCount(flattened2, 2);

    
    var flattened3 = ensureLinearString(flattened2 + "abcdef");
    checkRefCount(flattened2, 2);
    checkRefCount(flattened3, 1);
    checkExtensibleCapacity(flattened3, expectedCapacity);
}
testBasicLatin1();

function testBasicTwoByte() {
    var s1 = ensureLinearString("\u1234".repeat(500));
    var s2 = ensureLinearString("\u1256".repeat(500));
    var flattened1 = ensureLinearString(newRope(s1, s2));
    checkRefCount(flattened1, 1);
    
    
    var expectedCapacity = 1024 - StringBufferSizeInBytes / 2 - 1 ;
    checkExtensibleCapacity(flattened1, expectedCapacity);

    
    var flattened2 = ensureLinearString(flattened1 + "abcdef");
    checkRefCount(flattened1, undefined);
    checkRefCount(flattened2, 1);
    print(flattened2.length, 1006);

    
    var sharedBuffer = newString(flattened2, {shareStringBuffer: true});
    checkRefCount(flattened2, 2);

    
    var flattened3 = ensureLinearString(flattened2 + "abcdef");
    checkRefCount(flattened2, 2);
    checkRefCount(flattened3, 1);
    checkExtensibleCapacity(flattened3, expectedCapacity);
}
testBasicTwoByte();

function testBufferTransfer(fromNursery, toNursery) {
    var s1 = ensureLinearString("a".repeat(1000));
    var s2 = ensureLinearString("b".repeat(1000));
    var flattened1 = ensureLinearString(newRope(s1, s2, {nursery: fromNursery}));
    checkRefCount(flattened1, 1);

    var flattened2 = ensureLinearString(newRope(flattened1, "abcdef", {nursery: toNursery}));
    checkRefCount(flattened1, undefined);
    checkRefCount(flattened2, 1);
    gc();
    checkRefCount(flattened2, 1);
}
testBufferTransfer(false, false);
testBufferTransfer(false, true);
testBufferTransfer(true, false);
testBufferTransfer(true, true);
