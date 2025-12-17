gczeal(0);

var strLatin1 = newString("abcdefghijklmnopqrstuvwxyz".repeat(10), {newStringBuffer: true});
var strTwoByte = newString("abcdefghijklmnopqrstuvwx\u3210\u1234".repeat(10), {newStringBuffer: true});

function checkRefCount(s, expected) {
    
    
    if (getBuildConfiguration("debug")) {
        var repr = JSON.parse(stringRepresentation(s));
        print(repr.bufferRefCount, expected);
    }
}

function test() {
    checkRefCount(strLatin1, 1);
    checkRefCount(strTwoByte, 1);

    
    
    
    var clonebufferSameProcess = serialize([strLatin1, strTwoByte, strLatin1, strTwoByte],
                                           [], {scope: "SameProcess"});
    print(clonebufferSameProcess.arraybuffer.byteLength < 200, true);

    
    checkRefCount(strLatin1, 3);
    checkRefCount(strTwoByte, 3);

    
    var arr1 = deserialize(clonebufferSameProcess);
    print(arr1.length, 4);
    print(arr1[0], strLatin1);
    print(arr1[1], strTwoByte);
    print(arr1[2], strLatin1);
    print(arr1[3], strTwoByte);

    
    checkRefCount(strLatin1, 5);
    checkRefCount(strTwoByte, 5);

    
    
    var clonebufferDifferentProcess = serialize([strLatin1, strTwoByte, strLatin1, strTwoByte],
                                                [], {scope: "DifferentProcess"});
    print(clonebufferDifferentProcess.arraybuffer.byteLength > 500, true);

    
    var arr2 = deserialize(clonebufferDifferentProcess);
    print(arr2.length, 4);
    print(arr2[0], strLatin1);
    print(arr2[1], strTwoByte);
    print(arr2[2], strLatin1);
    print(arr2[3], strTwoByte);

    
    checkRefCount(strLatin1, 5);
    checkRefCount(strTwoByte, 5);
}
test();


gc();
finishBackgroundFree();
checkRefCount(strLatin1, 1);
checkRefCount(strTwoByte, 1);

function testAtom() {
    var sourceLatin1 = "abcde".repeat(200);
    var reLatin1 = new RegExp(sourceLatin1);

    var sourceTwoByte = "abcd\u1234".repeat(200);
    var reTwoByte = new RegExp(sourceTwoByte);

    var clonebuffer = serialize([reLatin1, reTwoByte], [], {scope: "SameProcess"});
    var arr = deserialize(clonebuffer);
    print(arr.length, 2);
    print(arr[0].source, sourceLatin1);
    print(arr[1].source, sourceTwoByte);
}
testAtom();
