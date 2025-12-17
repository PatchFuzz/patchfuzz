function testStrict() {
    "use strict";
    try {
        var o3 = new String("aaa");
        o3[0] = "b";
        print("failed");
    } 
    catch (e) {
        print("passed");
    }
}
testStrict();

function testNonStrict() {
    try {
        var o3 = new String("aaa");
        o3[0] = "b";
        if (o3 != "aaa")
            print("failed");
        else
            print("passed");
    } 
    catch (e) {
        print("failed");
    }
}
testNonStrict();