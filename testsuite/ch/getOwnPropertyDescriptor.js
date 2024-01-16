






function TestGetOwnPropertyDescriptor(obj, property) {
    CatchAndWriteExceptions(function () {
        var desc = Object.getOwnPropertyDescriptor(obj, property);
        var exists = (desc != undefined);
        WScript.Echo("Found descriptor for " + property + ": " + exists);
        if (exists) {
            for (var i in desc) {
                WScript.Echo(i + "=" + desc[i]);
            }
        }
    });
}

function CatchAndWriteExceptions(func) {
    try {
        func();
    }
    catch (e) {
        WScript.Echo(e.name + ": " + e.number);
    }
}

TestGetOwnPropertyDescriptor({ foo: "fooValue" }, "foo");
