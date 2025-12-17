gczeal(0);

function print(s, flag) {
    if (typeof stringRepresentation === "function") {
        var rep = JSON.parse(stringRepresentation(s));
        print(rep.flags.includes(flag), true, "Missing flag: " + flag);
    }
}
function test(extensibleTenured, ropeTenured) {
    var s1 = "12345678901234567890";

    
    var s2 = ensureLinearString(newRope(newRope(newRope(s1, s1), s1), s1));
    if (extensibleTenured) {
        minorgc();
        minorgc();
    }
    print(isNurseryAllocated(s2), !extensibleTenured);
    print(s2, "EXTENSIBLE");

    
    var s3 = ensureLinearString(newRope(s2, s1, {nursery: !ropeTenured}));
    print(isNurseryAllocated(s3), !ropeTenured);
    print(s3, "EXTENSIBLE");

    
    
    
    if (ropeTenured && !extensibleTenured) {
        print(s2, "EXTENSIBLE");
    } else {
        print(s2, "DEPENDENT_BIT");
    }

    print(s2, "12345678901234567890123456789012345678901234567890123456789012345678901234567890");
    print(s3, "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890");
}
test(false, false);
test(false, true);
test(true, false);
test(true, true);
