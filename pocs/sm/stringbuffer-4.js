gczeal(0);


function testJSON() {
    var json = `["${"a".repeat(2000)}"]`;
    var s = JSON.parse(json)[0];
    var repr = JSON.parse(stringRepresentation(s));
    print(repr.flags.includes("HAS_STRING_BUFFER_BIT"), true);
    print(repr.bufferRefCount, 1);
}
testJSON();


function testAtom() {
    var str = "b".repeat(2000);
    var obj = {[str]: 1};
    var atom = Object.keys(obj)[0];
    var repr = JSON.parse(stringRepresentation(atom));
    print(repr.flags.includes("HAS_STRING_BUFFER_BIT"), true);
    print(repr.bufferRefCount, 1);
}
testAtom();


function testJoin() {
    var str = Array(1000).fill("a").join(",");
    var repr = JSON.parse(stringRepresentation(str));
    print(repr.flags.includes("HAS_STRING_BUFFER_BIT"), true);
    print(repr.bufferRefCount, 1);
}
testJoin();


function testLowerCase() {
    var str = "A".repeat(2000).toLowerCase();
    var repr = JSON.parse(stringRepresentation(str));
    print(repr.flags.includes("HAS_STRING_BUFFER_BIT"), true);
    print(repr.bufferRefCount, 1);
}
testLowerCase();

function testUpperCase(N) {
    
    
    
    var str = "ß".repeat(N).toUpperCase();
    var repr = JSON.parse(stringRepresentation(str));
    print(repr.flags.includes("HAS_STRING_BUFFER_BIT"), true);
    print(repr.bufferRefCount, 1);
}
testUpperCase(1000);  
testUpperCase(2000);  
