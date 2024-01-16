












WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");



var x = (new Map()).toString();


for (var i = 0; i < 10; i++) {
    var tmp = new Set();
    tmp = tmp.toString();
}

assert.areEqual("[object Map]", x);
WScript.Echo("pass");
