




function assertPropertyExists(o, p, v) {
    if (!o.hasOwnProperty(p)) {
        throw new Error("Object does not have expected property '" + p + "'");
    }
    if (o[p] !== v) {
        throw new Error("Object has property '" + p + "' but its value does not match the expected value");
    }
}

function assertPropertyDoesNotExist(o, p) {
    if (o.hasOwnProperty(p)) {
        throw new Error("Object has unexpected property '" + p + "'");
    }
}

WScript.LoadScriptFile("vso_os_1091425_1.js");
WScript.LoadScriptFile("vso_os_1091425_2.js");
try {
    eval('function nonConfigurableFoo() {  }');
} catch (e) {
    if (e.message === "Cannot redefine non-configurable property 'nonConfigurableFoo'") {
        print("Pass");
    }
    else {
        print("Fail");
    }
}
